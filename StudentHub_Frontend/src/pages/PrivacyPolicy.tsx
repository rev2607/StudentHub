import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy for StudentHub.in</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: 01 / 01 / 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              At <strong>StudentHub.in</strong>, we value and respect your privacy. This Privacy Policy explains how we collect, use, protect, and disclose information when you visit or use our website and services.
            </p>

            <hr className="my-8 border-gray-300" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3 mt-6">a) Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Mobile number</li>
                <li>Educational preferences</li>
                <li>Any information voluntarily submitted through forms</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3 mt-6">b) Non-Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Browser type</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent</li>
                <li>Cookies and usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide educational content and services</li>
                <li>Share updates related to exams, colleges, scholarships, or courses</li>
                <li>Respond to inquiries and support requests</li>
                <li>Improve website functionality and user experience</li>
                <li>Send promotional or informational communications (with consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                StudentHub.in may use cookies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Enhance user experience</li>
                <li>Understand website usage patterns</li>
                <li>Improve content relevance</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can disable cookies through your browser settings if you prefer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Protection & Security</h2>
              <p className="text-gray-700 mb-4">
                We implement reasonable security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We <strong>do not sell or rent</strong> your personal information.
              </p>
              <p className="text-gray-700 mb-4">Information may be shared only:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>With trusted service partners for operational purposes</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and users' safety</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. StudentHub.in is not responsible for the privacy practices or content of those external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                StudentHub.in does not knowingly collect personal data from children under 13 years of age. If such information is discovered, it will be deleted promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For any questions or concerns regarding this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                📧 <strong>Email:</strong>{' '}
                <a href="mailto:info@studenthub.in" className="text-blue-600 hover:text-blue-800 underline">
                  info@studenthub.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

