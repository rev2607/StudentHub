-- Create email_subscriptions table
CREATE TABLE IF NOT EXISTS email_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    source VARCHAR(100) DEFAULT 'footer_form' CHECK (source IN ('footer_form', 'newsletter_signup', 'counselling_form', 'manual')),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email ON email_subscriptions(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_status ON email_subscriptions(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_created_at ON email_subscriptions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert email subscriptions
CREATE POLICY "Anonymous users can insert email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to insert email subscriptions
CREATE POLICY "Authenticated users can insert email subscriptions" ON email_subscriptions
    FOR INSERT 
    TO authenticated
    WITH CHECK (true);

-- Create policy to allow admin users to view all subscriptions (using JWT email claim)
CREATE POLICY "Admins can view all email subscriptions" ON email_subscriptions
    FOR SELECT USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

-- Create policy to allow admin users to update subscriptions (using JWT email claim)
CREATE POLICY "Admins can update email subscriptions" ON email_subscriptions
    FOR UPDATE USING (
        auth.uid() IS NOT NULL AND 
        auth.jwt() ->> 'email' IN ('admin@studenthub.in', 'info@studenthub.in')
    );

-- Create a function to update the updated_at timestamp
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
