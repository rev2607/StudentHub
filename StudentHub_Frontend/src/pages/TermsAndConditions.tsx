import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service for StudentHub.in</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: 01 / 01 / 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Welcome to <strong>StudentHub.in</strong>. By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
            </p>

            <hr className="my-8 border-gray-300" />

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By using StudentHub.in, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, please discontinue use of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Website</h2>
              <p className="text-gray-700 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Use the website only for lawful and educational purposes</li>
                <li>Not misuse, hack, or disrupt the platform</li>
                <li>Not upload false, harmful, or misleading content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Content Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                All information provided on StudentHub.in (college details, exams, cutoffs, fees, etc.) is for <strong>informational purposes only</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                We do not guarantee accuracy, completeness, or latest updates and advise users to verify information from official sources.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-4">All content on StudentHub.in including:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Text</li>
                <li>Graphics</li>
                <li>Logos</li>
                <li>Design</li>
              </ul>
              <p className="text-gray-700 mb-4">
                is the property of StudentHub.in and protected under applicable copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Submissions</h2>
              <p className="text-gray-700 mb-4">Any content or information submitted by users:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Must be accurate and lawful</li>
                <li>Grants StudentHub.in permission to use it for service improvement and communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">StudentHub.in shall not be liable for:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Any direct or indirect loss or damage</li>
                <li>Errors or omissions in content</li>
                <li>Decisions made based on website information</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Use of the website is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination of Access</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate access to users who violate these Terms without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                StudentHub.in may update these Terms of Service at any time. Continued use of the website after changes implies acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions related to these Terms, contact us at:
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

export default TermsAndConditions;

