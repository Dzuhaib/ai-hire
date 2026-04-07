-- Add trial_ends_at column to track free trial period
ALTER TABLE public.subscriptions 
ADD COLUMN trial_ends_at timestamp with time zone DEFAULT NULL;

-- Update the status check constraint to include 'trial' status
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_status_check;
ALTER TABLE public.subscriptions ADD CONSTRAINT subscriptions_status_check 
CHECK (status IN ('active', 'cancelled', 'expired', 'pending_payment', 'trial'));