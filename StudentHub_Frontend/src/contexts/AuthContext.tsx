import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

// User Profile Interface
export interface UserProfile {
  id: string
  user_id: string
  name: string
  phone_number: string
  email: string
  target_exam: string
  pincode: string
  city_area: string
  created_at: string
  updated_at: string
}

// Auth Context Interface
interface AuthContextType {
  user: User | null
  session: Session | null
  profile: UserProfile | null
  loading: boolean
  signUp: (email: string, password: string, profileData: Partial<UserProfile>) => Promise<{ success: boolean; error?: string }>
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => Promise<{ success: boolean; error?: string }>
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ success: boolean; error?: string }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize auth state
  useEffect(() => {
    let isMounted = true

    const initializeAuth = async () => {
      try {
        // Get current session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
          if (isMounted) setLoading(false)
          return
        }

        if (isMounted) {
          setSession(session)
          setUser(session?.user ?? null)
          
          if (session?.user) {
            await loadUserProfile(session.user.id)
          } else {
            setLoading(false)
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        if (isMounted) setLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.id)
      
      if (isMounted) {
        setSession(session)
        setUser(session?.user ?? null)
        
        if (session?.user) {
          await loadUserProfile(session.user.id)
        } else {
          setProfile(null)
          setLoading(false)
        }
      }
    })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  // Load user profile from database
  const loadUserProfile = async (userId: string) => {
    try {
      console.log('Loading profile for user:', userId)
      
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (error) {
        console.error('Error loading profile:', error)
        setProfile(null)
      } else {
        console.log('Profile loaded successfully:', data)
        setProfile(data)
      }
    } catch (error) {
      console.error('Error loading profile:', error)
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  // Sign up function
  const signUp = async (email: string, password: string, profileData: Partial<UserProfile>) => {
    try {
      console.log('🚀 Starting signup process for:', email)
      console.log('📝 Profile data:', profileData)
      
      // Step 1: Create auth user only
      console.log('📧 Creating auth user...')
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })

      console.log('🔐 Auth response:', { authData, authError })

      if (authError) {
        console.error('❌ Auth signup error:', authError)
        return { success: false, error: authError.message }
      }

      if (!authData.user) {
        console.error('❌ No user created')
        return { success: false, error: 'Failed to create user' }
      }

      console.log('✅ Auth user created:', authData.user.id)

      // Check if email confirmation is required
      if (authData.user.email_confirmed_at === null) {
        console.log('📧 Email confirmation required - user created but needs confirmation')
        return { 
          success: true, 
          error: 'Account created! Please check your email and click the confirmation link to complete signup.' 
        }
      }

      // If user is confirmed, create profile
      console.log('👤 User confirmed, creating profile...')
      const profilePayload = {
        user_id: authData.user.id,
        name: profileData.name || '',
        phone_number: profileData.phone_number || '',
        email: profileData.email || email,
        target_exam: profileData.target_exam || '',
        pincode: profileData.pincode || '',
        city_area: profileData.city_area || '',
      }
      
      console.log('📋 Profile payload:', profilePayload)

      const { data: profileResult, error: profileError } = await supabase
        .from('user_profiles')
        .insert([profilePayload])
        .select()
        .single()

      console.log('👤 Profile response:', { profileResult, profileError })

      if (profileError) {
        console.error('❌ Profile creation error:', profileError)
        // Don't fail signup if profile creation fails - user can create profile later
        console.log('⚠️ Profile creation failed, but user is signed up')
        return { success: true, error: 'Account created! You can complete your profile later.' }
      }

      console.log('✅ Signup successful:', profileResult)
      setProfile(profileResult)
      return { success: true }

    } catch (error) {
      console.error('💥 Signup error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      console.log('Signing in user:', email)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Sign in error:', error)
        return { success: false, error: error.message }
      }

      console.log('Sign in successful:', data.user?.id)
      return { success: true }
    } catch (error) {
      console.error('Sign in error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  // Sign out function
  const signOut = async () => {
    try {
      console.log('Signing out user...')
      
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Sign out error:', error)
        return { success: false, error: error.message }
      }

      // Clear local state
      setUser(null)
      setSession(null)
      setProfile(null)
      setLoading(false)
      
      console.log('Sign out successful')
      return { success: true }
    } catch (error) {
      console.error('Sign out error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  // Update profile function
  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) {
      return { success: false, error: 'No user logged in' }
    }

    try {
      console.log('Updating profile for user:', user.id)
      console.log('Updates:', updates)
      
      // Check if profile exists
      const { data: existingProfile, error: checkError } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single()

      let result

      if (existingProfile) {
        // Update existing profile
        console.log('Updating existing profile...')
        result = await supabase
          .from('user_profiles')
          .update({
            ...updates,
            updated_at: new Date().toISOString(),
          })
          .eq('user_id', user.id)
          .select()
          .single()
      } else {
        // Create new profile
        console.log('Creating new profile...')
        result = await supabase
          .from('user_profiles')
          .insert([
            {
              user_id: user.id,
              name: updates.name || '',
              phone_number: updates.phone_number || '',
              email: updates.email || user.email || '',
              target_exam: updates.target_exam || '',
              pincode: updates.pincode || '',
              city_area: updates.city_area || '',
            },
          ])
          .select()
          .single()
      }

      if (result.error) {
        console.error('Profile operation error:', result.error)
        return { success: false, error: result.error.message }
      }

      console.log('Profile operation successful:', result.data)
      setProfile(result.data)
      return { success: true }
    } catch (error) {
      console.error('Profile update error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  const value = {
    user,
    session,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
