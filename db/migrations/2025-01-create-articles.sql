-- Create articles table for authored content/articles
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    author TEXT DEFAULT 'StudentHub Team',
    featured_image_url TEXT,
    category TEXT DEFAULT 'General',
    tags TEXT[],
    view_count INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    published_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category);
CREATE INDEX IF NOT EXISTS idx_articles_is_published ON articles(is_published);

-- Enable Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all users to read published articles
CREATE POLICY "Allow public read access to published articles" ON articles
    FOR SELECT
    TO public
    USING (is_published = true);

-- Policy: Allow service role to insert/update articles
CREATE POLICY "Allow service role to manage articles" ON articles
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policy: Allow anyone to update view_count for published articles
CREATE POLICY "Allow public to update view_count" ON articles
    FOR UPDATE
    TO public
    USING (is_published = true)
    WITH CHECK (is_published = true AND OLD.id = NEW.id AND OLD.view_count <= NEW.view_count);

-- Grant necessary permissions
GRANT SELECT ON articles TO anon, authenticated;
GRANT UPDATE (view_count) ON articles TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON articles TO service_role;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS trigger_update_articles_updated_at ON articles;
CREATE TRIGGER trigger_update_articles_updated_at
    BEFORE UPDATE ON articles
    FOR EACH ROW
    EXECUTE FUNCTION update_articles_updated_at();

