import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  city: string;
  target_exam: string;
}

interface ValidationErrors {
  full_name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  city?: string;
  target_exam?: string;
}

const SignupWithProfile: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    target_exam: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [infoMsg, setInfoMsg] = useState<string>('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Subscribe to auth state changes for debugging
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("AUTH EVENT", event, session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Full name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    // Phone validation - exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be exactly 10 digits';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation - minimum 6 characters
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation - must match
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // Target exam validation
    if (!formData.target_exam) {
      newErrors.target_exam = 'Please select a target exam';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    let { value } = e.target as HTMLInputElement;
    
    // Sanitize phone: digits only and max 10
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors and info messages when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (errorMsg) {
      setErrorMsg('');
    }
    if (infoMsg) {
      setInfoMsg('');
    }
  };

  const handleResendConfirmation = async () => {
    try {
      await supabase.auth.resend({
        type: 'signup',
        email: formData.email,
      });
      setInfoMsg('Confirmation email sent! Please check your inbox.');
    } catch (error) {
      console.error('Resend error:', error);
      setErrorMsg('Failed to resend confirmation email. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setInfoMsg('');

    // 1. Validate client-side
    if (!validateForm()) {
      return;
    }

    // Check if user agreed to terms
    if (!agreedToTerms) {
      setErrorMsg('Please accept the Privacy Policy and Terms & Conditions to continue.');
      return;
    }

    setIsLoading(true);

    try {
      // 2. Call signUp with redirectTo and user metadata
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            full_name: formData.full_name.trim(),
            phone: formData.phone.trim(),
            city: formData.city.trim(),
            target_exam: formData.target_exam
          }
        }
      });

      console.log('SignUp response:', { data: signUpData, error: signUpError });

      // 3. If signUp returns an error → show it and stop
      if (signUpError) {
        console.error('SignUp error:', signUpError);
        let errorMessage = 'Signup failed. ';
        if (signUpError.message) {
          errorMessage += signUpError.message;
        } else {
          errorMessage += 'Please check your connection and try again.';
        }
        setErrorMsg(errorMessage);
        setIsLoading(false);
        return;
      }

      let session = signUpData?.session;

      // 4. If no session returned → fallback to signInWithPassword
      if (!session) {
        console.log('No session returned, attempting signInWithPassword fallback...');
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        console.log('SignIn fallback response:', { data: signInData, error: signInError });

        if (signInError) {
          // Likely due to email confirmation - show banner
          console.log('SignIn fallback failed, showing email confirmation banner');
          setInfoMsg("Account created. Please confirm your email. Click 'Resend' if you didn't receive it.");
          setIsLoading(false);
          return;
        }

        // Sign-in succeeded, use signInData.session
        session = signInData?.session;
      }

      // 5. Once we have a session, insert profile into profiles
      if (session?.user) {
        console.log('Inserting profile for user:', session.user.id);
        
        // Check if phone number already exists
        const { data: existingPhone } = await supabase
          .from('profiles')
          .select('phone')
          .eq('phone', formData.phone.trim())
          .single();
        
        if (existingPhone) {
          console.error('Phone number already exists:', formData.phone);
          setErrorMsg('This phone number is already registered. Please use a different number.');
          setIsLoading(false);
          return;
        }
        
        const { data: profileData, error: profileError } = await supabase.from('profiles').insert([{
          user_id: session.user.id,
          full_name: formData.full_name.trim(),
          phone: formData.phone.trim(),
          city: formData.city.trim(),
          target_exam: formData.target_exam
        }]).select();

        console.log('Profile insert response:', { data: profileData, error: profileError });

        // 6. If profile insert fails → log error, sign out user, show error message
        if (profileError) {
          console.error('Profile insert error:', profileError);
          await supabase.auth.signOut();
          // Show more detailed error information
          let errorMessage = 'Failed to create profile. ';
          if (profileError.message) {
            errorMessage += profileError.message;
          } else {
            errorMessage += 'Please check your connection and try again.';
          }
          setErrorMsg(errorMessage);
          setIsLoading(false);
          return;
        }

        console.log('Profile created successfully:', profileData);
      } else {
        console.error('No user available for profile creation');
        setErrorMsg('Failed to create user account. Please try again.');
        setIsLoading(false);
        return;
      }

      // 7. On success → redirect to `/` or `next` param
      console.log('Signup successful, redirecting...');
      setIsLoading(false);
      const redirectTo = searchParams.get('next') || '/';
      navigate(redirectTo);
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMsg('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join StudentHub to access mock tests and study resources
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errorMsg && (
            <div className="text-red-600 mb-4 bg-red-50 border border-red-200 px-4 py-3 rounded-md" data-testid="signup-error">
              {errorMsg}
            </div>
          )}
          
          {infoMsg && (
            <div className="text-blue-600 mb-4 bg-blue-50 border border-blue-200 px-4 py-3 rounded-md" data-testid="signup-info">
              <div className="mb-2">{infoMsg}</div>
              {infoMsg.includes('confirm') && (
                <button
                  type="button"
                  onClick={handleResendConfirmation}
                  className="text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                >
                  Resend confirmation email
                </button>
              )}
            </div>
          )}

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                value={formData.full_name}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.full_name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
                data-testid="signup-name"
              />
              {errors.full_name && (
                <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your 10 digit Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                data-testid="signup-phone"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
                data-testid="signup-email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your password"
                data-testid="signup-password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Confirm your password"
                data-testid="signup-confirm"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                value={formData.city}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.city ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your city"
                data-testid="signup-city"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city}</p>
              )}
            </div>

            {/* Target Exam */}
            <div>
              <label htmlFor="target_exam" className="block text-sm font-medium text-gray-700">
                Target Exam *
              </label>
              <select
                id="target_exam"
                name="target_exam"
                required
                value={formData.target_exam}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.target_exam ? 'border-red-300' : 'border-gray-300'
                }`}
                data-testid="signup-exam"
              >
                <option value="">Select your target exam</option>
                <option value="JEE Mains">JEE Mains</option>
                <option value="JEE Advanced">JEE Advanced</option>
                <option value="EAMCET">EAMCET</option>
                <option value="NEET">NEET</option>
                <option value="Other">Other</option>
              </select>
              {errors.target_exam && (
                <p className="mt-1 text-sm text-red-600">{errors.target_exam}</p>
              )}
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agree-terms" className="text-gray-700">
                I agree to receive communications via SMS, RCS, and WhatsApp, and I accept the{' '}
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link
                  to="/terms-and-conditions"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Terms & Conditions
                </Link>
                .
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || !agreedToTerms}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="signup-submit"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupWithProfile;