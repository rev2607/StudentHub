import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from '../lib/supabaseClient';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [profileName, setProfileName] = useState<string>('');
  const userMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Results", path: "/results" },
    { title: "News", path: "/news" },
    { title: "Exams", path: "/exams" },
    { title: "Colleges", path: "/colleges" },
    { title: "Mock Tests", path: "/mock-tests" },
    { title: "Career Guidance Test", path: "/psychometric-test" },
  ];

  // Check auth state on mount and subscribe to changes (non-blocking)
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        
        if (currentSession?.user) {
          // Fetch user profile (non-blocking - don't await, let it load in background)
          (async () => {
            try {
              const { data: profile } = await supabase
                .from('profiles')
                .select('full_name')
                .eq('user_id', currentSession.user.id)
                .single();
              setProfileName(profile?.full_name || currentSession.user.email || '');
            } catch (error: any) {
              // Fallback to email if profile fetch fails (e.g., profile doesn't exist)
              console.log('Profile fetch failed in Navbar:', error.code);
              setProfileName(currentSession.user.email || '');
            }
          })();
        } else {
          setProfileName('');
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
        setSession(null);
        setProfileName('');
      }
    };

    checkSession();

    // Subscribe to auth state changes with console logging for dev
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log("AUTH EVENT", event, newSession);
      setSession(newSession);
      
      if (newSession?.user) {
        // Fetch user profile (non-blocking)
        (async () => {
          try {
            const { data: profile } = await supabase
              .from('profiles')
              .select('full_name')
              .eq('user_id', newSession.user.id)
              .single();
            setProfileName(profile?.full_name || newSession.user.email || '');
          } catch (error: any) {
            // Fallback to email if profile fetch fails (e.g., profile doesn't exist)
            console.log('Profile fetch failed in Navbar auth change:', error.code);
            setProfileName(newSession.user.email || '');
          }
        })();
      } else {
        setProfileName('');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Close user menu and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getUserDisplayName = () => {
    const name = profileName || 'User';
    return name.length > 9 ? name.substring(0, 9) + '...' : name;
  };

  const getUserAvatar = () => {
    const name = profileName || session?.user?.email || 'U';
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/StudentHub_Blue_Logo.svg" 
                className="h-8 sm:h-10 lg:h-12 w-auto" 
                alt="StudentHub Logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.title} 
                  to={item.path} 
                  className={`relative px-3 py-2 xl:px-4 text-sm font-medium transition-all duration-200 rounded-md ${
                    isActive 
                      ? 'text-[var(--site-green)] bg-green-50' 
                      : 'text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[var(--site-green)] rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {session?.user ? (
              <div className="relative" ref={userMenuRef} data-testid="nav-user">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <div className="w-8 h-8 bg-[var(--site-green)] text-[#262443] rounded-full flex items-center justify-center font-semibold text-sm">
                    {getUserAvatar()}
                  </div>
                  <span className="font-medium text-sm">{getUserDisplayName()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                    <Link
                      to="/profile/edit"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <span>Profile Settings</span>
                    </Link>
                    <Link
                      to="/mock-tests"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <span>Mock Tests</span>
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                    >
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--site-green)] transition-colors duration-200"
                  data-testid="nav-signin"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-semibold bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                  data-testid="nav-signup"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={mobileMenuRef} className="lg:hidden absolute w-full bg-white shadow-lg z-50 border-t border-gray-100">
          <div className="px-4 py-6 space-y-2">
            {/* Navigation Links */}
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={item.title} 
                    to={item.path} 
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-[var(--site-green)] bg-green-50 border-l-4 border-[var(--site-green)]' 
                        : 'text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile Auth Section */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              {session?.user ? (
                <>
                  {/* User Profile Header */}
                  <div className="flex items-center px-4 py-3 mb-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[var(--site-green)] text-[#262443] rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                      {getUserAvatar()}
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-medium text-gray-900">{getUserDisplayName()}</div>
                      <div className="text-sm text-gray-500">Welcome back!</div>
                    </div>
                  </div>
                  
                  {/* Profile Actions */}
                  <div className="space-y-1">
                    <Link
                      to="/profile/edit"
                      className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50 transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setIsUserMenuOpen(false);
                      }}
                    >
                      <span>Profile Settings</span>
                    </Link>
                    <Link
                      to="/mock-tests"
                      className="flex items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50 transition-all duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setIsUserMenuOpen(false);
                      }}
                    >
                      <span>Mock Tests</span>
                    </Link>
                  </div>
                  
                  {/* Sign Out */}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-all duration-200 mt-2"
                  >
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    data-testid="nav-signin"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center px-4 py-3 rounded-lg text-base font-semibold bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] transition-all duration-200 shadow-sm"
                    onClick={() => setIsOpen(false)}
                    data-testid="nav-signup"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;