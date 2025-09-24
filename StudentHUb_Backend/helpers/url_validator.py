"""
Helper functions for URL validation and image extraction
"""
import requests
import urllib.parse
from typing import Optional, Dict
import re

def validate_url(url: str, timeout: int = 10) -> bool:
    """
    Validate if a URL is reachable and returns status code 200.
    
    Args:
        url: The URL to validate
        timeout: Request timeout in seconds
        
    Returns:
        True if URL returns status code 200, False otherwise
    """
    try:
        # Add protocol if missing
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url
            
        response = requests.head(url, timeout=timeout, allow_redirects=True)
        return response.status_code == 200
    except Exception as e:
        print(f"❌ URL validation failed for {url}: {str(e)}")
        return False

def extract_image_from_page(url: str, timeout: int = 10) -> Optional[str]:
    """
    Extract og:image or twitter:image from a webpage using regex.
    
    Args:
        url: The URL to extract image from
        timeout: Request timeout in seconds
        
    Returns:
        Image URL if found, None otherwise
    """
    try:
        # Add protocol if missing
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url
            
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, timeout=timeout, headers=headers, allow_redirects=True)
        if response.status_code != 200:
            return None
            
        content = response.text
        
        # Try to find og:image using regex
        og_image_match = re.search(r'<meta[^>]*property=["\']og:image["\'][^>]*content=["\']([^"\']+)["\'][^>]*>', content, re.IGNORECASE)
        if og_image_match:
            image_url = og_image_match.group(1)
            # Convert relative URLs to absolute
            if image_url.startswith('//'):
                image_url = 'https:' + image_url
            elif image_url.startswith('/'):
                parsed_url = urllib.parse.urlparse(url)
                image_url = f"{parsed_url.scheme}://{parsed_url.netloc}{image_url}"
            return image_url
        
        # Try twitter:image using regex
        twitter_image_match = re.search(r'<meta[^>]*name=["\']twitter:image["\'][^>]*content=["\']([^"\']+)["\'][^>]*>', content, re.IGNORECASE)
        if twitter_image_match:
            image_url = twitter_image_match.group(1)
            # Convert relative URLs to absolute
            if image_url.startswith('//'):
                image_url = 'https:' + image_url
            elif image_url.startswith('/'):
                parsed_url = urllib.parse.urlparse(url)
                image_url = f"{parsed_url.scheme}://{parsed_url.netloc}{image_url}"
            return image_url
            
        # Try to find any img tag with reasonable src using regex
        img_matches = re.findall(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*>', content, re.IGNORECASE)
        for src in img_matches:
            if src and not src.startswith('data:'):
                # Convert relative URLs to absolute
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    parsed_url = urllib.parse.urlparse(url)
                    src = f"{parsed_url.scheme}://{parsed_url.netloc}{src}"
                return src
                
    except Exception as e:
        print(f"❌ Image extraction failed for {url}: {str(e)}")
        
    return None

def generate_fallback_search_url(title: str) -> str:
    """
    Generate a fallback Perplexity search URL for a news title.
    
    Args:
        title: The news title to search for
        
    Returns:
        Perplexity search URL
    """
    encoded_title = urllib.parse.quote_plus(title)
    return f"https://www.perplexity.ai/search?q={encoded_title}"

def get_best_valid_link(citations: list, fallback_title: str) -> str:
    """
    Get the best valid link from citations or generate fallback.
    
    Args:
        citations: List of citation URLs
        fallback_title: Title to use for fallback search URL
        
    Returns:
        Valid URL or fallback search URL
    """
    if not citations or not isinstance(citations, list):
        return generate_fallback_search_url(fallback_title)
    
    # Try each citation in order
    for citation in citations:
        if isinstance(citation, str) and citation.strip():
            citation = citation.strip()
            if validate_url(citation):
                print(f"✅ Valid citation found: {citation}")
                return citation
            else:
                print(f"❌ Invalid citation: {citation}")
    
    # If no valid citations, return fallback
    print(f"⚠️ No valid citations found, using fallback for: {fallback_title}")
    return generate_fallback_search_url(fallback_title)

def get_best_image_url(article_url: str, fallback_image: str = "https://placehold.co/400x300/4ade80/ffffff?text=News") -> str:
    """
    Get the best image URL for an article.
    
    Args:
        article_url: The article URL to extract image from
        fallback_image: Default image URL if extraction fails
        
    Returns:
        Valid image URL
    """
    if not article_url or not article_url.startswith(('http://', 'https://')):
        return fallback_image
        
    # Extract image from the article page
    extracted_image = extract_image_from_page(article_url)
    if extracted_image:
        # Validate the extracted image URL
        if validate_url(extracted_image):
            print(f"✅ Valid image extracted: {extracted_image}")
            return extracted_image
        else:
            print(f"❌ Extracted image URL invalid: {extracted_image}")
    
    print(f"⚠️ Using fallback image for: {article_url}")
    return fallback_image
