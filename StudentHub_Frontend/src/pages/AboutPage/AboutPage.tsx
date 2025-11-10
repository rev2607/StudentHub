import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, Target, TrendingUp, FileText, MessageCircle } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "About Student Hub – Your Learning Network for Colleges, Exams & Career Guidance";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Learn about Student Hub - India\'s leading academic collaboration platform offering college information, exam preparation resources, mock tests, previous papers, and career guidance for students preparing for JEE, NEET, and other entrance exams.'
      );
    }

    // Add structured data (JSON-LD) for SEO
    const existingScript = document.getElementById('about-page-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'about-page-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Student Hub",
      "alternateName": "StudentHub",
      "url": "https://studenthub.in/about",
      "logo": "https://studenthub.in/StudentHub_Logo.svg",
      "description": "Student Hub is a comprehensive learning network and academic collaboration platform designed for students across India. We provide trusted student resources including college information, exam preparation materials, mock tests, previous papers, and career guidance.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/studenthub.in",
        "https://x.com/Studenthub9999",
        "https://www.linkedin.com/groups/15533070/"
      ],
      "offers": {
        "@type": "Offer",
        "itemOffered": [
          {
            "@type": "Course",
            "name": "College Information and Rankings",
            "description": "Comprehensive information on colleges including rankings, fees, placements, and admission details"
          },
          {
            "@type": "Course",
            "name": "Exam Preparation Resources",
            "description": "Study materials, previous papers, and exam guides for JEE Main, JEE Advanced, NEET, BITSAT, and other entrance exams"
          },
          {
            "@type": "Course",
            "name": "Mock Tests and Practice",
            "description": "Online mock tests and practice papers to help students prepare effectively for competitive exams"
          },
          {
            "@type": "Course",
            "name": "Career Guidance",
            "description": "Career guidance tools including psychometric tests and college predictors to help students make informed decisions"
          }
        ]
      },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      }
    });
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('about-page-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero_banner text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to Student Hub – The Learning Network for Students
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Empowering students across India with comprehensive academic resources, 
              exam preparation tools, and a supportive learning community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Why Choose Student Hub Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Student Hub?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Student Hub</strong> is a learning community designed for students to find trusted 
              <strong> student resources</strong>, collaborate with peers, and prepare smarter. Explore 
              <strong> study materials online</strong>, practice mock tests, and get guidance across exams 
              and colleges on an <strong>academic collaboration platform</strong> built for you.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Discover curated notes, previous papers, colleges information, mock tests, and 
              community answers—everything you need to succeed. These <strong>student resources</strong> 
              make it easy to learn, revise, and plan your next steps.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Be part of a supportive <strong>learning community</strong>—ask questions, share 
              insights, and collaborate with fellow learners. Student Hub is your 
              <strong> academic collaboration platform</strong> to grow together.
            </p>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-[var(--site-green)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Colleges</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive information on colleges including rankings, fees, placements, 
                admission procedures, and detailed college profiles for IITs, NITs, and private institutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-[var(--site-green)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Exams</h3>
              </div>
              <p className="text-gray-600">
                Complete exam guides for JEE Main, JEE Advanced, NEET, BITSAT, VITEEE, EAMCET, 
                and other major entrance exams with syllabus, important dates, and preparation strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-[var(--site-blue)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Articles</h3>
              </div>
              <p className="text-gray-600">
                Expert-written articles on exam preparation, college selection, career guidance, 
                study tips, and educational insights to help you make informed decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[var(--site-green)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Mock Tests</h3>
              </div>
              <p className="text-gray-600">
                Practice with our comprehensive mock tests designed to simulate real exam conditions, 
                helping you assess your preparation and improve your performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 text-[var(--site-green)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Contact / Ask Us</h3>
              </div>
              <p className="text-gray-600">
                Get answers to your questions from our community and experts. Connect with us for 
                personalized guidance and support throughout your academic journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--site-blue)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">College Predictor</h3>
              </div>
              <p className="text-gray-600">
                Use our advanced college predictor tool to estimate your chances of admission in 
                various colleges based on your exam scores and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[var(--site-green)] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Learning Community</h3>
              </div>
              <p className="text-gray-600">
                Join our active learning community. Share knowledge, 
                collaborate on projects, and grow together in your academic journey.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg mb-4 leading-relaxed">
              At Student Hub, our mission is to democratize access to quality educational resources 
              and empower every student in India to achieve their academic and career goals. We believe 
              that every student deserves access to comprehensive information, quality study materials, 
              and a supportive community that helps them succeed.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              We understand the challenges students face when preparing for competitive exams like 
              JEE Main, JEE Advanced, NEET, and other entrance tests. That's why we've built a 
              platform that consolidates everything you need in one place—from college information 
              and rankings to exam preparation resources and practice tests.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment extends beyond just providing information. We foster a collaborative 
              learning environment where students can share insights, ask questions, and learn from 
              each other's experiences. Student Hub is more than a website—it's your partner in 
              academic success.
            </p>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How Student Hub Helps You Succeed
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Comprehensive College Research
              </h3>
              <p className="text-gray-700">
                Make informed decisions about your college choices with detailed profiles covering 
                rankings, fee structures, placement records, infrastructure, faculty, and admission 
                procedures. Our extensive database includes top engineering colleges, medical colleges, 
                and other institutions across India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Exam Preparation Made Easy
              </h3>
              <p className="text-gray-700">
                Access previous year question papers, syllabus breakdowns, important dates, and 
                preparation strategies for all major entrance exams. Whether you're preparing for 
                JEE Main, NEET, BITSAT, or state-level exams, we've got you covered with 
                comprehensive resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Practice with Mock Tests
              </h3>
              <p className="text-gray-700">
                Test your knowledge and improve your performance with our extensive collection of 
                mock tests. Simulate real exam conditions, identify your strengths and weaknesses, 
                and track your progress over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Stay Updated with Latest News
              </h3>
              <p className="text-gray-700">
                Never miss important updates about exam notifications, result announcements, 
                counselling schedules, and admission deadlines. Our news section keeps you informed 
                about everything happening in the education sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Expert Guidance and Articles
              </h3>
              <p className="text-gray-700">
                Learn from expert-written articles covering study strategies, time management, 
                stress management, career guidance, and more. Our content is designed to help 
                you not just prepare for exams, but also develop skills for lifelong learning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Community Support
              </h3>
              <p className="text-gray-700">
                Connect with fellow students, share your experiences, ask questions, and get 
                answers from peers and experts. Our learning community is built on collaboration 
                and mutual support, making your academic journey less lonely and more rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Resources
          </h2>
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Main navigation">
            <Link 
              to="/exams" 
              className="px-6 py-3 bg-[var(--site-green)] text-white rounded-lg hover:bg-[#7bb53a] transition-colors font-medium"
            >
              Exams
            </Link>
            <Link 
              to="/colleges" 
              className="px-6 py-3 bg-[var(--site-green)] text-white rounded-lg hover:bg-[#7bb53a] transition-colors font-medium"
            >
              Colleges
            </Link>
            <Link 
              to="/articles" 
              className="px-6 py-3 bg-[var(--site-blue)] text-white rounded-lg hover:opacity-90 transition-colors font-medium"
            >
              Articles
            </Link>
            <Link 
              to="/mock-tests" 
              className="px-6 py-3 bg-[var(--site-green)] text-white rounded-lg hover:bg-[#7bb53a] transition-colors font-medium"
            >
              Mock Tests
            </Link>
            <Link 
              to="/ask-us" 
              className="px-6 py-3 bg-[var(--site-green)] text-white rounded-lg hover:bg-[#7bb53a] transition-colors font-medium"
            >
              Contact / Ask Us
            </Link>
            <Link 
              to="/college-predictor" 
              className="px-6 py-3 bg-[var(--site-blue)] text-white rounded-lg hover:opacity-90 transition-colors font-medium"
            >
              College Predictor
            </Link>
          </nav>
        </section>

        {/* Call to Action */}
        <section className="text-center hero_banner text-white rounded-lg p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start exploring colleges, preparing for exams, and connecting with a community that supports your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/" 
              className="px-8 py-4 bg-white text-[var(--site-blue)] rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get Started
            </Link>
            <Link 
              to="/signup" 
              className="px-8 py-4 bg-[var(--site-green)] text-white rounded-lg hover:bg-[#7bb53a] transition-colors font-semibold text-lg border-2 border-white"
            >
              Create Account
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

