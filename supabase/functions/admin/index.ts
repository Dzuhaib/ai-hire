import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const EMAILJS_SERVICE_ID = "service_57jwo4o";
const EMAILJS_PUBLIC_KEY = "MqaarR3vYud1QmXz7";
const EMAILJS_ADMIN_TEMPLATE = "template_uoosd5n";
const EMAILJS_USER_TEMPLATE = "template_62owekc";
const ADMIN_EMAIL = "admin@aivized.com";

async function sendEmailNotification(templateId: string, params: Record<string, string>) {
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: templateId,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: params,
      }),
    });
    console.log("[EmailJS] Send result:", res.status, await res.text());
  } catch (e) {
    console.error("[EmailJS] Failed:", e);
  }
}

interface AdminRequest {
  action: 'get_users' | 'get_subscriptions' | 'check_admin' | 'get_stats' | 'terminate_user' | 'approve_payment' | 'get_pending_payments';
  clerkUserId?: string;
  targetUserId?: string;
  subscriptionId?: string;
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
    
    const { action, clerkUserId, targetUserId, subscriptionId }: AdminRequest = await req.json();
    
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
      
      case 'get_pending_payments': {
        const { data: pendingSubscriptions, error } = await supabase
          .from('subscriptions')
          .select(`
            *,
            profiles:clerk_user_id (
              email,
              full_name
            )
          `)
          .eq('status', 'pending_payment')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Get pending payments error:', error);
          throw error;
        }
        
        return new Response(
          JSON.stringify({ pendingPayments: pendingSubscriptions }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      case 'approve_payment': {
        if (!subscriptionId) {
          return new Response(
            JSON.stringify({ error: 'Subscription ID required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        console.log('Approving payment for subscription:', subscriptionId);
        
        // Get subscription details first
        const { data: subscription, error: fetchError } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('id', subscriptionId)
          .single();
        
        if (fetchError || !subscription) {
          console.error('Fetch subscription error:', fetchError);
          return new Response(
            JSON.stringify({ error: 'Subscription not found' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        // Update subscription status to active
        const { error: updateError } = await supabase
          .from('subscriptions')
          .update({
            status: 'active',
            started_at: new Date().toISOString(),
          })
          .eq('id', subscriptionId);
        
        if (updateError) {
          console.error('Update subscription error:', updateError);
          throw updateError;
        }
        
        // Create billing history record
        await supabase.from('billing_history').insert({
          clerk_user_id: subscription.clerk_user_id,
          amount: subscription.plan_price,
          currency: 'GBP',
          description: `${subscription.plan_name} - Monthly subscription (WhatsApp payment)`,
          status: 'paid',
          paid_at: new Date().toISOString(),
        });
        
        console.log('Payment approved successfully for subscription:', subscriptionId);
        
        // Send email notifications
        // Get user profile for email
        const { data: userProfile } = await supabase
          .from('profiles')
          .select('email, full_name')
          .eq('clerk_user_id', subscription.clerk_user_id)
          .maybeSingle();
        
        if (userProfile) {
          // Notify admin
          await sendEmailNotification(EMAILJS_ADMIN_TEMPLATE, {
            to_email: ADMIN_EMAIL,
            subject: `💰 Subscription Activated - ${userProfile.full_name || "Unknown"}`,
            message_body: `${userProfile.full_name || "Unknown"} (${userProfile.email}) subscription activated.\nPlan: ${subscription.plan_name}\nAmount: £${subscription.plan_price}`,
          });
          
          // Notify user
          await sendEmailNotification(EMAILJS_USER_TEMPLATE, {
            to_email: userProfile.email,
            subject: `✅ Subscription Confirmed - ${subscription.plan_name}`,
            message_body: `Hi ${userProfile.full_name || "there"},\n\nYour ${subscription.plan_name} subscription (£${subscription.plan_price}/month) is now active.\nThank you for choosing aivized!`,
          });
        }
        
        return new Response(
          JSON.stringify({ success: true, message: 'Payment approved successfully' }),
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