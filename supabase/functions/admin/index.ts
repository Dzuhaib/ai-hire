import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.aivized.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ADMIN_EMAIL = "info@aivized.com";

interface AdminRequest {
  action: 'get_users' | 'get_subscriptions' | 'check_admin' | 'get_stats' | 'terminate_user' | 'approve_payment' | 'get_pending_payments';
  clerkUserId?: string;
  targetUserId?: string;
  subscriptionId?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { action, clerkUserId, targetUserId, subscriptionId }: AdminRequest = await req.json();

    if (clerkUserId) {
      const { data: isAdmin, error: roleError } = await supabase
        .rpc('has_role', { _clerk_user_id: clerkUserId, _role: 'admin' });

      if (roleError) {
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

        if (error) throw error;

        const { data: roles, error: rolesError } = await supabase
          .from('user_roles')
          .select('*');

        if (rolesError) {}

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
          .select(`*, profiles:clerk_user_id (email, full_name)`)
          .order('created_at', { ascending: false });

        if (error) throw error;

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
          JSON.stringify({ stats: { totalUsers: usersCount || 0, activeSubscriptions: activeSubsCount || 0, monthlyRevenue: totalRevenue } }),
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

        if (targetUserId === clerkUserId) {
          return new Response(
            JSON.stringify({ error: 'Cannot terminate your own account' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error: subsError } = await supabase
          .from('subscriptions')
          .delete()
          .eq('clerk_user_id', targetUserId);

        const { error: billingError } = await supabase
          .from('billing_history')
          .delete()
          .eq('clerk_user_id', targetUserId);

        const { error: rolesError } = await supabase
          .from('user_roles')
          .delete()
          .eq('clerk_user_id', targetUserId);

        const { error: profileError } = await supabase
          .from('profiles')
          .delete()
          .eq('clerk_user_id', targetUserId);

        if (profileError) throw profileError;

        return new Response(
          JSON.stringify({ success: true, message: 'User terminated successfully' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'get_pending_payments': {
        const { data: pendingSubscriptions, error } = await supabase
          .from('subscriptions')
          .select(`*, profiles:clerk_user_id (email, full_name)`)
          .eq('status', 'pending_payment')
          .order('created_at', { ascending: false });

        if (error) throw error;

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

        const { data: subscription, error: fetchError } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('id', subscriptionId)
          .single();

        if (fetchError || !subscription) {
          return new Response(
            JSON.stringify({ error: 'Subscription not found' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error: updateError } = await supabase
          .from('subscriptions')
          .update({ status: 'active', started_at: new Date().toISOString() })
          .eq('id', subscriptionId);

        if (updateError) throw updateError;

        await supabase.from('billing_history').insert({
          clerk_user_id: subscription.clerk_user_id,
          amount: subscription.plan_price,
          currency: 'GBP',
          description: `${subscription.plan_name} - Monthly subscription (WhatsApp payment)`,
          status: 'paid',
          paid_at: new Date().toISOString(),
        });

        const { data: userProfile } = await supabase
          .from('profiles')
          .select('email, full_name')
          .eq('clerk_user_id', subscription.clerk_user_id)
          .maybeSingle();

        if (userProfile) {
          const displayName = userProfile.full_name || "there";
          await Promise.allSettled([
            sendEmail({
              to: ADMIN_EMAIL,
              subject: `Subscription Activated - ${userProfile.full_name || "Unknown"}`,
              html: `<h2>Subscription Activated</h2><p><strong>${userProfile.full_name || "Unknown"}</strong> (${userProfile.email}) subscription activated.</p><p><strong>Plan:</strong> ${subscription.plan_name}<br><strong>Amount:</strong> £${subscription.plan_price}/month</p>`,
            }),
            sendEmail({
              to: userProfile.email,
              subject: `Subscription Confirmed - ${subscription.plan_name}`,
              html: `<h2>Subscription Confirmed</h2><p>Hi ${displayName},</p><p>Your <strong>${subscription.plan_name}</strong> subscription (£${subscription.plan_price}/month) is now active.</p><p>Thank you for choosing aivized!</p><p><a href="https://www.aivized.com/dashboard" style="display:inline-block;padding:12px 24px;background-color:#D95A2B;color:#fff;text-decoration:none;border-radius:8px;">Go to Dashboard</a></p>`,
            }),
          ]);
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
