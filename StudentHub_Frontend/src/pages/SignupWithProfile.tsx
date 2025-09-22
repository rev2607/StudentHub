import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
    const { name, value } = e.target;
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

    setIsLoading(true);

    try {
      // 2. Call signUp with redirectTo
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });

      // 3. If signUp returns an error → show it and stop
      if (signUpError) {
        setErrorMsg(signUpError.message);
        setIsLoading(false);
        return;
      }

      let session = signUpData?.session;

      // 4. If signUp returns no session (common when email confirmation required)
      if (!session) {
        // Attempt immediate sign-in fallback
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) {
          // Likely due to email confirmation - show friendly banner
          setInfoMsg("Account created. Please confirm your email — we've sent a link. If you didn't receive it, click Resend.");
          setIsLoading(false);
          return;
        }

        // Sign-in succeeded, use signInData.session
        session = signInData?.session;
      }

      if (!session) {
        setErrorMsg('Failed to create session. Please try again.');
        setIsLoading(false);
        return;
      }

      // 5. Once we have a session, insert profile into profiles
      const { error: profileError } = await supabase.from('profiles').insert([{
        user_id: session.user.id,
        full_name: formData.full_name.trim(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        target_exam: formData.target_exam
      }]);

      // 6. If profileError occurs (e.g., phone uniqueness/RLS)
      if (profileError) {
        console.error('Profile insert error:', profileError);
        // Call signOut to clear partial session
        await supabase.auth.signOut();
        setErrorMsg(profileError.message || 'Failed to create profile.');
        setIsLoading(false);
        return;
      }

      // 7. On full success, redirect to /
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

          <div>
            <button
              type="submit"
              disabled={isLoading}
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