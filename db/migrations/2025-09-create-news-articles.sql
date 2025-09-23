-- Create news_articles table for caching education news from Perplexity API
CREATE TABLE IF NOT EXISTS news_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    date timestamptz NOT NULL,
    snippet text,
    link text,
    created_at timestamptz DEFAULT now()
);

-- Create index for efficient querying by date
CREATE INDEX IF NOT EXISTS idx_news_articles_date ON news_articles(date DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all users to read news articles
CREATE POLICY "Allow public read access to news articles" ON news_articles
    FOR SELECT
    TO public
    USING (true);

-- Policy: Allow only service role to insert/update news articles
CREATE POLICY "Allow service role to insert news articles" ON news_articles
    FOR INSERT
    TO service_role
    WITH CHECK (true);

CREATE POLICY "Allow service role to update news articles" ON news_articles
    FOR UPDATE
    TO service_role
    USING (true);

-- Grant necessary permissions
GRANT SELECT ON news_articles TO anon, authenticated;
GRANT INSERT, UPDATE ON news_articles TO service_role;
