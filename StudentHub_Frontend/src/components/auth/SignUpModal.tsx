import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignIn: () => void
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const { signUp } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    password: '',
    confirmPassword: '',
    target_exam: '',
    pincode: '',
    city_area: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const targetExams = [
    'JEE Main',
    'JEE Advanced',
    'NEET',
    'GATE',
    'CAT',
    'UPSC',
    'SSC',
    'CLAT',
    'AIIMS',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    const { confirmPassword, ...profileData } = formData

    try {
      const result = await signUp(formData.email, formData.password, profileData)
      
      if (result.success) {
        if (result.error) {
          // Account created but needs email confirmation
          setError(result.error)
          // Don't close modal, let user see the message
        } else {
          // Account created and confirmed
          onClose()
          setFormData({
            name: '',
            phone_number: '',
            email: '',
            password: '',
            confirmPassword: '',
            target_exam: '',
            pincode: '',
            city_area: ''
          })
        }
      } else {
        setError(result.error || 'Sign up failed')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Sign Up</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Confirm your password"
            />
          </div>

          <div>
            <label htmlFor="target_exam" className="block text-sm font-medium text-gray-700 mb-1">
              Target Exam
            </label>
            <select
              id="target_exam"
              name="target_exam"
              value={formData.target_exam}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
            >
              <option value="">Select your target exam</option>
              {targetExams.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Enter your pincode"
            />
          </div>

          <div>
            <label htmlFor="city_area" className="block text-sm font-medium text-gray-700 mb-1">
              City/Area
            </label>
            <input
              type="text"
              id="city_area"
              name="city_area"
              value={formData.city_area}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:border-transparent"
              placeholder="Enter your city or area"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--site-green)] text-white py-2 px-4 rounded-md hover:bg-[#7bb53a] focus:outline-none focus:ring-2 focus:ring-[var(--site-green)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToSignIn}
                className="text-[var(--site-green)] hover:underline font-medium"
              >
                Sign in here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpModal
