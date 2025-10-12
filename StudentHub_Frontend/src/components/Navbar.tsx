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
    { title: "Training Institutes", path: "/training-institutes" },
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
    <nav className="bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold text-[var(--site-green)] flex items-center gap-2">
                <img src="/StudentHub_Blue_Logo.svg" className="w-32 sm:w-38 md:w-44 lg:w-52 xl:w-58" alt="StudentHub Logo" />
                <span className="hidden">STUDENT HUB.IN</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 mt-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.title} 
                  to={item.path} 
                  className={`relative text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200 text-base font-normal pb-2 pt-1 ${
                    isActive ? 'text-[var(--site-green)]' : ''
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--site-green)]"></div>
                  )}
                </Link>
              );
            })}
            
            {/* Auth Section - Immediately renders without blocking */}
            <div className="flex items-center space-x-4 ml-4 mt-1">
              {session?.user ? (
                // User dropdown menu
                <div className="relative" ref={userMenuRef} data-testid="nav-user">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200 focus:outline-none"
                  >
                    {/* Profile Avatar */}
                    <div className="w-8 h-8 bg-[var(--site-green)] text-[#262443] rounded-full flex items-center justify-center font-semibold text-sm">
                      {getUserAvatar()}
                    </div>
                    <span className="hidden lg:block font-medium">{getUserDisplayName()}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <Link
                        to="/profile/edit"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/mock-tests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mock Tests
                      </Link>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          handleLogout();
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                // Sign in / Sign up buttons - immediately visible
                <>
                  <Link
                    to="/login"
                    className="text-[#262443] hover:text-[var(--site-green)] transition-colors duration-200"
                    data-testid="nav-signin"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] px-4 py-2 rounded-md font-semibold text-sm transition-all shadow"
                    data-testid="nav-signup"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[var(--site-green)] focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-2 pt-4 pb-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.title} 
                  to={item.path} 
                  className={`block px-3 py-2 rounded-md text-base font-normal transition-colors ${
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
            
            {/* Mobile Auth Section */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              {session?.user ? (
                <>
                  <div className="flex items-center px-3 py-2 mb-2">
                    {/* Mobile Profile Avatar */}
                    <div className="w-10 h-10 bg-[var(--site-green)] text-[#262443] rounded-full flex items-center justify-center font-semibold text-lg mr-3">
                      {getUserAvatar()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{getUserDisplayName()}</div>
                      <div className="text-xs text-gray-500">Welcome back!</div>
                    </div>
                  </div>
                  <Link
                    to="/profile/edit"
                    className="block px-3 py-2 rounded-md text-base font-normal text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                    onClick={() => {
                      setIsOpen(false);
                      setIsUserMenuOpen(false);
                    }}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/mock-tests"
                    className="block px-3 py-2 rounded-md text-base font-normal text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                    onClick={() => {
                      setIsOpen(false);
                      setIsUserMenuOpen(false);
                    }}
                  >
                    Mock Tests
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-normal text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-normal text-gray-700 hover:text-[var(--site-green)] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                    data-testid="nav-signin"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-normal bg-[var(--site-green)] hover:bg-[#7bb53a] text-[#262443] mx-3"
                    onClick={() => setIsOpen(false)}
                    data-testid="nav-signup"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;