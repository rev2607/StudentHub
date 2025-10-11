-- Create counselling_requests table
CREATE TABLE IF NOT EXISTS counselling_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    exam_target VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_counselling_requests_email ON counselling_requests(email);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_counselling_requests_status ON counselling_requests(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_counselling_requests_created_at ON counselling_requests(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE counselling_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to insert their own requests
CREATE POLICY "Users can insert their own counselling requests" ON counselling_requests
    FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to view their own requests
CREATE POLICY "Users can view their own counselling requests" ON counselling_requests
    FOR SELECT USING (true);

-- Create policy to allow admin users to view all requests (you can modify this based on your admin logic)
CREATE POLICY "Admins can view all counselling requests" ON counselling_requests
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.email IN ('admin@studenthub.in', 'info@studenthub.in')
        )
    );

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_counselling_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER trigger_update_counselling_requests_updated_at
    BEFORE UPDATE ON counselling_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_counselling_requests_updated_at();
