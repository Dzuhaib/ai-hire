
-- Drop all existing overly permissive policies on profiles
DROP POLICY IF EXISTS "Anyone can insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Drop all existing overly permissive policies on subscriptions
DROP POLICY IF EXISTS "Anyone can insert subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can update their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.subscriptions;

-- Drop all existing overly permissive policies on billing_history
DROP POLICY IF EXISTS "Anyone can insert billing history" ON public.billing_history;
DROP POLICY IF EXISTS "Users can view their own billing history" ON public.billing_history;

-- Profiles: No anonymous access. Only service role (edge functions) can insert/update.
-- Anon users cannot read any profiles.
CREATE POLICY "Deny anon select on profiles"
  ON public.profiles FOR SELECT
  USING (false);

CREATE POLICY "Deny anon insert on profiles"
  ON public.profiles FOR INSERT
  WITH CHECK (false);

CREATE POLICY "Deny anon update on profiles"
  ON public.profiles FOR UPDATE
  USING (false);

-- Subscriptions: No anonymous access.
CREATE POLICY "Deny anon select on subscriptions"
  ON public.subscriptions FOR SELECT
  USING (false);

CREATE POLICY "Deny anon insert on subscriptions"
  ON public.subscriptions FOR INSERT
  WITH CHECK (false);

CREATE POLICY "Deny anon update on subscriptions"
  ON public.subscriptions FOR UPDATE
  USING (false);

-- Billing history: No anonymous access.
CREATE POLICY "Deny anon select on billing_history"
  ON public.billing_history FOR SELECT
  USING (false);

CREATE POLICY "Deny anon insert on billing_history"
  ON public.billing_history FOR INSERT
  WITH CHECK (false);
