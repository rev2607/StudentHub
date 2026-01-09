import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using StudentHub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access the materials on StudentHub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on StudentHub's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Account</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain features of our platform, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">3.2 Account Termination</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason we deem necessary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Communication Consent</h2>
              <p className="text-gray-700 mb-4">
                By creating an account, you explicitly consent to receive communications from StudentHub via:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>SMS:</strong> Text messages containing updates, notifications, and promotional content</li>
                <li><strong>RCS:</strong> Rich Communication Services messages</li>
                <li><strong>WhatsApp:</strong> Messages through WhatsApp to your registered phone number</li>
                <li><strong>Email:</strong> Service updates, account notifications, and marketing communications</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Standard messaging and data rates may apply. You can opt-out of marketing communications at any time, but you may still receive important service-related messages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Conduct</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Use the service for any illegal purpose or in violation of any laws</li>
                <li>Violate or infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Use automated systems to access the service without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of StudentHub, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of StudentHub and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Mock Tests and Educational Content</h2>
              <p className="text-gray-700 mb-4">
                StudentHub provides mock tests and educational resources for practice purposes. While we strive for accuracy, we do not guarantee that the content is error-free or complete. Results from mock tests are for practice only and do not guarantee actual exam performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on StudentHub's website are provided on an 'as is' basis. StudentHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall StudentHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StudentHub's website, even if StudentHub or a StudentHub authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Revisions and Errata</h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on StudentHub's website could include technical, typographical, or photographic errors. StudentHub does not warrant that any of the materials on its website are accurate, complete, or current. StudentHub may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Links to Third-Party Sites</h2>
              <p className="text-gray-700 mb-4">
                StudentHub has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by StudentHub of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Modifications to Terms</h2>
              <p className="text-gray-700 mb-4">
                StudentHub may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> support@studenthub.in<br />
                <strong>Website:</strong> www.studenthub.in
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

