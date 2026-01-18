import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AdminRequest {
  action: 'get_users' | 'get_subscriptions' | 'check_admin' | 'get_stats' | 'terminate_user';
  clerkUserId?: string;
  targetUserId?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { action, clerkUserId, targetUserId }: AdminRequest = await req.json();
    
    console.log(`Admin action: ${action}, clerkUserId: ${clerkUserId}`);
    
    // Check if user is admin
    if (clerkUserId) {
      const { data: isAdmin, error: roleError } = await supabase
        .rpc('has_role', { _clerk_user_id: clerkUserId, _role: 'admin' });
      
      if (roleError) {
        console.error('Role check error:', roleError);
        return new Response(
          JSON.stringify({ error: 'Failed to verify admin status' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (action === 'check_admin') {
        return new Response(
          JSON.stringify({ isAdmin }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (!isAdmin) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized - Admin access required' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ error: 'User ID required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    switch (action) {
      case 'get_users': {
        const { data: profiles, error } = await supabase
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Get users error:', error);
          throw error;
        }
        
        // Get roles for each user
        const { data: roles, error: rolesError } = await supabase
          .from('user_roles')
          .select('*');
        
        if (rolesError) {
          console.error('Get roles error:', rolesError);
        }
        
        const usersWithRoles = profiles?.map(profile => ({
          ...profile,
          roles: roles?.filter(r => r.clerk_user_id === profile.clerk_user_id).map(r => r.role) || []
        }));
        
        return new Response(
          JSON.stringify({ users: usersWithRoles }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      case 'get_subscriptions': {
        const { data: subscriptions, error } = await supabase
          .from('subscriptions')
          .select(`
            *,
            profiles:clerk_user_id (
              email,
              full_name
            )
          `)
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Get subscriptions error:', error);
          throw error;
        }
        
        return new Response(
          JSON.stringify({ subscriptions }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      case 'get_stats': {
        const { count: usersCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });
        
        const { count: activeSubsCount } = await supabase
          .from('subscriptions')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active');
        
        const { data: revenueData } = await supabase
          .from('subscriptions')
          .select('plan_price')
          .eq('status', 'active');
        
        const totalRevenue = revenueData?.reduce((sum, sub) => sum + Number(sub.plan_price), 0) || 0;
        
        return new Response(
          JSON.stringify({
            stats: {
              totalUsers: usersCount || 0,
              activeSubscriptions: activeSubsCount || 0,
              monthlyRevenue: totalRevenue
            }
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      case 'terminate_user': {
        if (!targetUserId) {
          return new Response(
            JSON.stringify({ error: 'Target user ID required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        // Prevent admin from terminating themselves
        if (targetUserId === clerkUserId) {
          return new Response(
            JSON.stringify({ error: 'Cannot terminate your own account' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        console.log('Terminating user:', targetUserId);
        
        // Delete user's subscriptions
        const { error: subsError } = await supabase
          .from('subscriptions')
          .delete()
          .eq('clerk_user_id', targetUserId);
        
        if (subsError) {
          console.error('Delete subscriptions error:', subsError);
        }
        
        // Delete user's billing history
        const { error: billingError } = await supabase
          .from('billing_history')
          .delete()
          .eq('clerk_user_id', targetUserId);
        
        if (billingError) {
          console.error('Delete billing history error:', billingError);
        }
        
        // Delete user's roles
        const { error: rolesError } = await supabase
          .from('user_roles')
          .delete()
          .eq('clerk_user_id', targetUserId);
        
        if (rolesError) {
          console.error('Delete roles error:', rolesError);
        }
        
        // Delete user's profile
        const { error: profileError } = await supabase
          .from('profiles')
          .delete()
          .eq('clerk_user_id', targetUserId);
        
        if (profileError) {
          console.error('Delete profile error:', profileError);
          throw profileError;
        }
        
        console.log('User terminated successfully:', targetUserId);
        
        return new Response(
          JSON.stringify({ success: true, message: 'User terminated successfully' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Admin function error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});