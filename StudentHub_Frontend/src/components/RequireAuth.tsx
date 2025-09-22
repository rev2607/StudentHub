import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check session immediately on mount
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      } finally {
        // Always clear loading state - never hang
        setIsLoading(false);
      }
    };

    checkAuth();

    // Subscribe to auth state changes and redirect when session becomes null
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("AUTH EVENT in RequireAuth", event, session);
      setIsAuthenticated(!!session);
      // Clear loading on any auth state change
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Show brief loading state, then redirect or render children
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to signup (not login) as per original flow
  if (!isAuthenticated) {
    const currentPath = location.pathname + location.search;
    return <Navigate to={`/signup?next=${encodeURIComponent(currentPath)}`} replace />;
  }

  // Render protected content
  return <>{children}</>;
};

export default RequireAuth;
