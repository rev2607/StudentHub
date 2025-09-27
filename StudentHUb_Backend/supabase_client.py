# Supabase client configuration
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL") or os.getenv("VITE_SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("VITE_SUPABASE_ANON_KEY")

# Initialize Supabase client as None
supabase = None

def get_supabase_client():
    """Get the Supabase client instance with graceful error handling"""
    global supabase
    
    # If already initialized, return it
    if supabase is not None:
        return supabase
    
    # Check if Supabase is properly configured
    if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
        print("⚠️ Supabase not configured. News caching will be disabled.")
        print("   To enable news caching, set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env")
        return None
    
    # Check if URL is placeholder
    if "your_supabase_url_here" in SUPABASE_URL or "your_supabase_service_role_key_here" in SUPABASE_SERVICE_ROLE_KEY:
        print("⚠️ Supabase credentials are placeholder values. News caching will be disabled.")
        print("   Please set actual Supabase URL and service role key in .env")
        return None
    
    try:
        from supabase import create_client, Client
        supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
        print("✅ Supabase client initialized successfully")
        return supabase
    except Exception as e:
        print(f"❌ Failed to initialize Supabase client: {str(e)}")
        print("   News caching will be disabled")
        return None
