import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            to="/signup"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign Up
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to StudentHub. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>City and location</li>
                <li>Target exam information</li>
                <li>Account credentials (password)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                We may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process your registration and manage your account</li>
                <li>To send you communications via SMS, RCS, and WhatsApp regarding our services, updates, and promotional materials</li>
                <li>To personalize your experience and provide relevant content</li>
                <li>To improve our platform and develop new features</li>
                <li>To analyze usage patterns and trends</li>
                <li>To ensure security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Communication Preferences</h2>
              <p className="text-gray-700 mb-4">
                By creating an account, you consent to receive communications from us via:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>SMS:</strong> Text messages to your registered phone number</li>
                <li><strong>RCS (Rich Communication Services):</strong> Enhanced messaging services</li>
                <li><strong>WhatsApp:</strong> Messages through WhatsApp to your registered number</li>
                <li><strong>Email:</strong> Updates, notifications, and promotional emails</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can opt-out of marketing communications at any time by contacting us or using the unsubscribe options provided in our messages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our platform and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@studenthub.in<br />
                <strong>Website:</strong> www.studenthub.in
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

