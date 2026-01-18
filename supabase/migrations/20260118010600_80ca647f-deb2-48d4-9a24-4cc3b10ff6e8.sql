-- Create enum for app roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_user_id TEXT NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (clerk_user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (bypasses RLS)
CREATE OR REPLACE FUNCTION public.has_role(_clerk_user_id TEXT, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE clerk_user_id = _clerk_user_id
      AND role = _role
  )
$$;

-- RLS Policies for user_roles table
-- Only admins can view roles
CREATE POLICY "Only admins can view roles"
ON public.user_roles
FOR SELECT
USING (false); -- Access through edge function only

-- Only admins can insert roles (through edge function)
CREATE POLICY "Only admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (false);

-- Only admins can update roles (through edge function)
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
USING (false);

-- Only admins can delete roles (through edge function)
CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
USING (false);