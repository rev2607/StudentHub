-- Complete script to recreate email_subscriptions table with proper permissions
-- Run this entire script in Supabase SQL Editor

-- Drop existing table and all related objects
DROP TABLE IF EXISTS email_subscriptions CASCADE;
DROP FUNCTION IF EXISTS update_email_subscriptions_updated_at() CASCADE;

-- Create email_subscriptions table
CREATE TABLE email_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    source VARCHAR(100) DEFAULT 'footer_form' CHECK (source IN ('footer_form', 'newsletter_signup', 'counselling_form', 'manual')),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_status ON email_subscriptions(status);
CREATE INDEX idx_email_subscriptions_created_at ON email_subscriptions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies - these are the correct ones that will work
CREATE POLICY "Allow anonymous email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO anon
    WITH CHECK (true);

CREATE POLICY "Allow authenticated email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO authenticated
    WITH CHECK (true);

-- Admin policies (optional - only if you need admin access)
CREATE POLICY "Admins can view email subscriptions" ON email_subscriptions
    FOR SELECT USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

CREATE POLICY "Admins can update email subscriptions" ON email_subscriptions
    FOR UPDATE USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_email_subscriptions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER trigger_update_email_subscriptions_updated_at
    BEFORE UPDATE ON email_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_email_subscriptions_updated_at();
