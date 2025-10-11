-- Fix RLS policies for email_subscriptions table
-- The issue is that the current policies reference auth.users table which anonymous users cannot access

-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can view all email subscriptions" ON email_subscriptions;
DROP POLICY IF EXISTS "Admins can update email subscriptions" ON email_subscriptions;

-- Create new policies that don't reference auth.users table
-- Policy 1: Allow anyone to insert email subscriptions (already exists and works)
-- CREATE POLICY "Anyone can insert email subscriptions" ON email_subscriptions
--     FOR INSERT WITH CHECK (true);

-- Policy 2: Allow admin users to view all subscriptions (using service role or specific user emails)
CREATE POLICY "Admins can view all email subscriptions" ON email_subscriptions
    FOR SELECT USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

-- Policy 3: Allow admin users to update subscriptions (using service role or specific user emails)
CREATE POLICY "Admins can update email subscriptions" ON email_subscriptions
    FOR UPDATE USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

-- Alternative approach: Create a more permissive policy for anonymous users
-- This allows anonymous users to insert without triggering SELECT/UPDATE policy checks
CREATE POLICY "Anonymous users can insert email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO anon
    WITH CHECK (true);

-- Ensure the existing policy for authenticated users is also present
CREATE POLICY "Authenticated users can insert email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO authenticated
    WITH CHECK (true);
