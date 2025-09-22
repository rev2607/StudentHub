import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

interface ProfileData {
  full_name: string;
  phone: string;
  city: string;
  target_exam: string;
}

interface ValidationErrors {
  full_name?: string;
  phone?: string;
  city?: string;
  target_exam?: string;
}

const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<ProfileData>({
    full_name: '',
    phone: '',
    city: '',
    target_exam: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [submitError, setSubmitError] = useState<string>('');

  // Load current profile data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        console.log('GetUser response:', { data: { user }, error: userError });
        
        if (userError || !user) {
          console.error('No authenticated user:', userError);
          navigate('/login');
          return;
        }

        console.log('Fetching profile for user:', user.id);

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        console.log('Profile fetch response:', { data: profile, error: profileError });

        if (profileError) {
          // Check if it's a "no rows" error (profile doesn't exist)
          if (profileError.code === 'PGRST116') {
            console.log('No profile found for user:', user.id, '- allowing creation via form');
            // Don't show error, just leave form empty for user to fill out
            setIsLoadingProfile(false);
            return;
          } else {
            console.error('Error loading profile:', profileError);
            setSubmitError('Failed to load profile data. Please try again.');
            setIsLoadingProfile(false);
            return;
          }
        }

        if (!profile) {
          console.log('No profile found for user:', user.id, '- allowing creation via form');
          // Allow user to create profile via form - don't show error, just leave form empty
          setIsLoadingProfile(false);
          return;
        }

        console.log('Profile loaded successfully:', profile);
        setProfileData({
          full_name: profile.full_name || '',
          phone: profile.phone || '',
          city: profile.city || '',
          target_exam: profile.target_exam || ''
        });
      } catch (error) {
        console.error('Profile loading error:', error);
        setSubmitError('An unexpected error occurred');
      } finally {
        setIsLoadingProfile(false);
      }
    };

    loadProfile();
  }, [navigate]);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Full name validation
    if (!profileData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    // Phone validation
    if (!profileData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(profileData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    // City validation
    if (!profileData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // Target exam validation
    if (!profileData.target_exam) {
      newErrors.target_exam = 'Please select a target exam';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      console.log('GetUser for update:', { data: { user }, error: userError });
      
      if (userError || !user) {
        console.error('No authenticated user for update:', userError);
        navigate('/login');
        return;
      }

      console.log('Saving profile for user:', user.id, 'with data:', profileData);

      // Check if profile exists first
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      let result;
      if (existingProfile) {
        // Update existing profile
        console.log('Updating existing profile');
        result = await supabase
          .from('profiles')
          .update({
            full_name: profileData.full_name.trim(),
            phone: profileData.phone.trim(),
            city: profileData.city.trim(),
            target_exam: profileData.target_exam
          })
          .eq('user_id', user.id)
          .select();
      } else {
        // Create new profile
        console.log('Creating new profile');
        result = await supabase
          .from('profiles')
          .insert([{
            user_id: user.id,
            full_name: profileData.full_name.trim(),
            phone: profileData.phone.trim(),
            city: profileData.city.trim(),
            target_exam: profileData.target_exam
          }])
          .select();
      }

      console.log('Profile save response:', { data: result.data, error: result.error });

      if (result.error) {
        console.error('Profile save error:', result.error);
        if (result.error.message.includes('duplicate key') || result.error.message.includes('unique')) {
          setSubmitError('Phone already in use. Please use a different number.');
        } else {
          setSubmitError('Failed to save profile. Please try again.');
        }
        setIsLoading(false);
        return;
      }

      console.log('Profile saved successfully:', result.data);
      // Success - redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Profile update error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (isLoadingProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {profileData.full_name || profileData.phone || profileData.city ? 'Edit Profile' : 'Create Profile'}
            </h2>
            <p className="text-sm text-gray-600">
              {profileData.full_name || profileData.phone || profileData.city ? 'Update your profile information' : 'Complete your profile information'}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {submitError}
              </div>
            )}

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
                value={profileData.full_name}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.full_name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
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
                value={profileData.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your 10 digit Number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
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
                value={profileData.city}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.city ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your city"
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
                value={profileData.target_exam}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                  errors.target_exam ? 'border-red-300' : 'border-gray-300'
                }`}
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

            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {profileData.full_name || profileData.phone || profileData.city ? 'Updating...' : 'Creating...'}
                  </div>
                ) : (
                  profileData.full_name || profileData.phone || profileData.city ? 'Update Profile' : 'Create Profile'
                )}
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign Out
              </button>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
