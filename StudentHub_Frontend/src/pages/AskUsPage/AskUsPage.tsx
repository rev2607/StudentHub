import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchNewsFromSupabase } from '../../services/supabaseClient';
import { navigateToNewsPage } from '../HomePage/navigationToNewsPage';
import { supabase } from '../../lib/supabaseClient';

const AskUsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<any[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<{name: string, initials: string} | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const initialQueryProcessedRef = useRef(false);

  // Get initial query from URL params or location state
  const initialQuery = location.state?.query || new URLSearchParams(location.search).get('q') || '';

  // Fetch user information and check authentication
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setIsAuthenticated(true);
          
          // Try to get profile name first
          try {
            const { data: profile } = await supabase
              .from('profiles')
              .select('full_name')
              .eq('user_id', session.user.id)
              .single();
            
            if (profile?.full_name) {
              const initials = profile.full_name
                .split(' ')
                .map((name: string) => name.charAt(0).toUpperCase())
                .join('')
                .slice(0, 2);
              
              setUserInfo({
                name: profile.full_name,
                initials: initials
              });
            } else {
              // Fallback to email
              const emailName = session.user.email?.split('@')[0] || 'User';
              const initials = emailName.charAt(0).toUpperCase();
              
              setUserInfo({
                name: emailName,
                initials: initials
              });
            }
          } catch (profileError) {
            // Fallback to email if profile fetch fails
            const emailName = session.user.email?.split('@')[0] || 'User';
            const initials = emailName.charAt(0).toUpperCase();
            
            setUserInfo({
              name: emailName,
              initials: initials
            });
          }
        } else {
          setIsAuthenticated(false);
          // Set default user info for non-authenticated users
          setUserInfo({
            name: 'Guest',
            initials: 'G'
          });
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        setIsAuthenticated(false);
        // Set default user info
        setUserInfo({
          name: 'User',
          initials: 'U'
        });
      }
    };

    fetchUserInfo();
  }, []);

  // Initialize with initial query if provided (only once)
  React.useEffect(() => {
    if (initialQuery && !initialQueryProcessedRef.current) {
      initialQueryProcessedRef.current = true;
      handleAskQuestion(initialQuery);
    }
  }, [initialQuery]);

  // Fetch news from Supabase
  useEffect(() => {
    const fetchNews = async () => {
      setNewsLoading(true);
      try {
        const { data, error } = await fetchNewsFromSupabase(4);
        if (error) {
          console.error('Error fetching news:', error);
          // Fallback to sample news
          setNews([
            { title: "JEE Main 2025 Results Announced", date: new Date(Date.now() - 2 * 60 * 60 * 1000), link: null },
            { title: "NEET 2025 Registration Opens", date: new Date(Date.now() - 4 * 60 * 60 * 1000), link: null },
            { title: "VITEEE 2025 Exam Dates Released", date: new Date(Date.now() - 6 * 60 * 60 * 1000), link: null },
            { title: "IIT Delhi PhD Admissions Open", date: new Date(Date.now() - 8 * 60 * 60 * 1000), link: null }
          ]);
        } else if (data && data.length > 0) {
          const formattedNews = data.map(item => ({
            title: item.title,
            date: new Date(item.date),
            link: item.link,
            snippet: item.snippet,
            image_url: item.image_url
          }));
          setNews(formattedNews);
        } else {
          // Fallback to sample news
          setNews([
            { title: "JEE Main 2025 Results Announced", date: new Date(Date.now() - 2 * 60 * 60 * 1000), link: null },
            { title: "NEET 2025 Registration Opens", date: new Date(Date.now() - 4 * 60 * 60 * 1000), link: null },
            { title: "VITEEE 2025 Exam Dates Released", date: new Date(Date.now() - 6 * 60 * 60 * 1000), link: null },
            { title: "IIT Delhi PhD Admissions Open", date: new Date(Date.now() - 8 * 60 * 60 * 1000), link: null }
          ]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to sample news
        setNews([
          { title: "JEE Main 2025 Results Announced", date: new Date(Date.now() - 2 * 60 * 60 * 1000) },
          { title: "NEET 2025 Registration Opens", date: new Date(Date.now() - 4 * 60 * 60 * 1000) },
          { title: "VITEEE 2025 Exam Dates Released", date: new Date(Date.now() - 6 * 60 * 60 * 1000) },
          { title: "IIT Delhi PhD Admissions Open", date: new Date(Date.now() - 8 * 60 * 60 * 1000) }
        ]);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleAskQuestion = async (question: string) => {
    if (!question.trim()) return;

    // Increment question count
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);

    // Generate unique IDs using crypto.randomUUID or fallback
    const generateId = () => crypto.randomUUID ? crypto.randomUUID() : `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Check if user is not authenticated and this is the second question (after 1 free question)
    if (!isAuthenticated && newQuestionCount > 1) {
      // Add user message first
      const userMessage = {
        id: generateId(),
        type: 'user',
        content: question,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);

      // Show login prompt
      const loginPromptMessage = {
        id: generateId(),
        type: 'assistant',
        content: 'Thanks for your question! To continue using our AI assistant and get personalized responses, please log in or create an account.',
        timestamp: new Date(),
        showLoginPrompt: true
      };
      
      setMessages(prev => [...prev, loginPromptMessage]);
      return;
    }

    setIsLoading(true);
    
    // Add user message
    const userMessage = {
      id: generateId(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);

    try {
      // Make API call to get response
      const response = await fetch('/api/chatbot/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: question }),
      });

      const data = await response.json();
      console.log('Backend response:', data); // Debug log
      
      // Handle different response structures - backend returns 'answer'
      let rawResponse = '';
      if (data.answer) {
        rawResponse = data.answer;
      } else if (data.message) {
        rawResponse = data.message;
      } else if (data.response) {
        rawResponse = data.response;
      } else if (typeof data === 'string') {
        rawResponse = data;
      } else {
        rawResponse = 'I found some information for you. Let me help you with that.';
      }
      
      // Clean up the response - remove references and make it minimal
      let cleanResponse = rawResponse;
      
      // Remove reference links like [1], [2], etc.
      cleanResponse = cleanResponse.replace(/\[\d+\]/g, '');
      
      // Remove any reference links at the end
      cleanResponse = cleanResponse.replace(/\n\nReferences?:?\s*\[.*?\]/gi, '');
      cleanResponse = cleanResponse.replace(/\n\nSource:.*$/gi, '');
      cleanResponse = cleanResponse.replace(/\n\nLink:.*$/gi, '');
      
      // Keep only the first 2-3 lines for minimal response
      const lines = cleanResponse.split('\n').filter((line: string) => line.trim());
      if (lines.length > 3) {
        cleanResponse = lines.slice(0, 3).join('\n');
      }
      
      // Add assistant response
      const assistantMessage = {
        id: generateId(),
        type: 'assistant',
        content: cleanResponse.trim(),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      // Add error response
      const errorMessage = {
        id: generateId(),
        type: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleAskQuestion(inputValue);
      setInputValue('');
    }
  };

  const clearConversation = () => {
    setMessages([]);
  };


  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Helper function to format time ago
  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">SH</span>
            </div>
            <span className="text-xl font-bold text-green-500">STUDENT HUB.IN</span>
          </div>
        </div>

        {/* New Thread Button */}
        <div className="p-4">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            New Thread
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4">
          <div className="space-y-2">
            {[
              { icon: '🏠', label: 'Home', path: '/' },
              { icon: '🏛️', label: 'Colleges', path: '/colleges' },
              { icon: '📝', label: 'Exams', path: '/exams' },
              { icon: '📰', label: 'News', path: '/news' },
              { icon: '📊', label: 'Results', path: '/results' },
              { icon: '📋', label: 'Mock Tests', path: '/mock-tests' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-sm">
                  {userInfo?.initials || 'U'}
                </span>
              </div>
              <span className="text-sm">
                {userInfo?.name || 'User'}
              </span>
            </div>
            <button 
              onClick={clearConversation}
              className="text-gray-400 hover:text-white text-sm"
            >
              Clear conversations
            </button>
          </div>
          <button 
            onClick={handleLogout}
            className="text-gray-400 hover:text-white text-sm mt-2"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Ask Us Anything!</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">Share</span>
              📤
            </button>
            <div className="relative">
              <button className="text-gray-400 hover:text-white">
                <span className="sr-only">More options</span>
                ⋯
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <div className="text-6xl mb-4">🤔</div>
              <h2 className="text-2xl font-semibold mb-2">Ask us anything!</h2>
              <p className="text-lg">Get instant answers about colleges, courses, exams, and more.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl px-6 py-4 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-green-500 text-black'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    {message.showLoginPrompt && (
                      <div className="mt-4 flex gap-3">
                        <button
                          onClick={() => navigate('/login')}
                          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          Log In
                        </button>
                        <button
                          onClick={() => navigate('/signup')}
                          className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          Sign Up
                        </button>
                      </div>
                    )}
                    <div className="text-xs mt-2 opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-6 py-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-6">
          {!isAuthenticated && questionCount >= 1 ? (
            <div className="text-center text-gray-400">
              <p className="mb-3">Please log in to continue asking questions</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => navigate('/login')}
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    isAuthenticated 
                      ? "Ask a follow-up question..." 
                      : questionCount === 0 
                        ? "Ask your first question (free)..." 
                        : "Ask a follow-up question..."
                  }
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                ↑
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-gray-800 border-l border-gray-700 p-6">
        {/* Students Also Visited */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Students Also Visited</h3>
          <div className="space-y-3">
            {[
              { name: "IIT Roorkee", rating: 4.6, reviews: 1247, course: "BTech CSE", fee: "214800", logo: "🏛️" },
              { name: "IIT Delhi", rating: 4.7, reviews: 1156, course: "BTech CSE", fee: "240000", logo: "🎓" },
              { name: "IIT Bombay", rating: 4.8, reviews: 1432, course: "BTech CSE", fee: "228000", logo: "🏛️" },
              { name: "NIT Trichy", rating: 4.4, reviews: 892, course: "BTech CSE", fee: "161200", logo: "🎓" }
            ].map((college, index) => (
              <div key={index} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer" onClick={() => navigate(`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm">
                    {college.logo}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-white">{college.name}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>⭐ {college.rating}</span>
                      <span>({college.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-300 mb-1">{college.course}: Course Details, Admission</div>
                <div className="text-xs text-green-400 font-medium">₹{college.fee} First Year Fee</div>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Latest News</h3>
          <div className="space-y-3">
            {newsLoading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-700 p-3 rounded-lg animate-pulse">
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-3 bg-gray-600 rounded w-1/3"></div>
                  </div>
                ))}
              </div>
            ) : (
              news.map((newsItem, index) => {
                const timeAgo = getTimeAgo(newsItem.date);
                return (
                  <div 
                    key={index} 
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer" 
                    onClick={() => {
                      // Always navigate to news detail page using slug
                      navigateToNewsPage(navigate, newsItem.link || '', newsItem.title);
                    }}
                  >
                    <div className="text-sm font-medium mb-1 text-white line-clamp-2">{newsItem.title}</div>
                    <div className="text-xs text-gray-400">{timeAgo}</div>
                  </div>
                );
              })
            )}
          </div>
          {!newsLoading && (
            <button 
              onClick={() => navigate('/news')}
              className="w-full mt-3 text-center text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              View All News →
            </button>
          )}
        </div>

        {/* Help */}
        <div className="mt-6 text-center">
          <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-lg">?</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskUsPage;
