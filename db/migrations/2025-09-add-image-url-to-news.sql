-- Add image_url column to news_articles table
ALTER TABLE news_articles 
ADD COLUMN IF NOT EXISTS image_url text;

-- Add index for efficient querying
CREATE INDEX IF NOT EXISTS idx_news_articles_image_url ON news_articles(image_url);

-- Update existing records to have default image
UPDATE news_articles 
SET image_url = 'https://studenthub.in/default-news.jpg' 
WHERE image_url IS NULL OR image_url = '';

-- Grant permissions
GRANT SELECT ON news_articles TO anon, authenticated;
GRANT INSERT, UPDATE ON news_articles TO service_role;
