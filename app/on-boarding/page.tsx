"use client";
import { useEffect } from 'react';
import { FaRegStar, FaCertificate, FaIdCard, FaCreditCard, FaAward, FaKey, FaRocket, FaPlane, FaChartLine, FaGift, FaBus, FaLightbulb, FaHandshake, FaUserTie, FaTrophy, FaGlobe, FaTicketAlt, FaClipboard, FaUsers, FaPencilAlt, FaBullseye, FaCheck, FaGraduationCap, FaChartBar, FaUniversity } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Onboarding() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen">
      {/* Hero Section */}
      <section className="text-center text-white py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-background.jpg)' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Join Uniford Foundation as an Intern!</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">An amazing opportunity to grow, learn, and contribute!</p>
        </div>
      </section>

      {/* Roles & Responsibilities Section */}
      <section className="py-16 bg-white text-gray-800" id="roles">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Roles & Responsibilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaClipboard className="mr-2 text-indigo-600" /> Management
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><FaCheck className="text-green-500 inline mr-2" /> Project Coordination</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Team Collaboration</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Performance Monitoring</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Documentation</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaUsers className="mr-2 text-indigo-600" /> Leadership
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><FaCheck className="text-green-500 inline mr-2" /> Team Leadership</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Decision Making</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Mentorship</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Goal Setting</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaPencilAlt className="mr-2 text-indigo-600" /> Content Creation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><FaCheck className="text-green-500 inline mr-2" /> Content Development</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Creative Designs</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Social Media Planning</li>
                <li><FaCheck className="text-green-500 inline mr-2" /> Marketing Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 transition duration-300"
                data-aos="fade-up"
              >
                <div className="text-4xl mb-4 text-blue-500">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-16 bg-white" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringProcess.map((step, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-up">
                <div className="text-4xl mb-4 text-blue-500">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const benefits = [
  { icon: <FaCertificate />, title: 'Letter of Recommendation', description: 'Receive a professional letter of recommendation that will help you stand out in future job applications.' },
  { icon: <FaIdCard />, title: 'UNR Certificate & ID', description: 'Get an official UNR Certificate and Scholar ID, showing you’re part of a prestigious program.' },
  { icon: <FaCreditCard />, title: 'Golden Card', description: 'The Golden Card is your special access pass to exclusive events, opportunities, and resources.' },
  { icon: <FaAward />, title: 'Recognition & Referral', description: 'Your hard work will be recognized, and you might even get referrals for new opportunities within the organization.' },
  { icon: <FaKey />, title: 'Scholar Managing Tender', description: 'As an intern, you can apply for the Scholar Managing Tender, giving you a chance to manage exciting projects.' },
  { icon: <FaRocket />, title: 'Prioritized Tender Applications', description: 'When applying for tenders, your application will be prioritized, giving you a better chance of getting selected.' },
  { icon: <FaUserTie />, title: 'Profile Listing on Portal', description: 'Your profile will be listed on our team page, showcasing your skills and role within Uniford.' },
  { icon: <FaLightbulb />, title: 'Promotion Based on Profile & IP', description: 'Your profile and intellectual property (IP) will be considered for promotions, boosting your career growth.' },
  { icon: <FaPlane />, title: 'Trips & Tours for Best Interns', description: 'Top-performing interns will have the chance to go on trips and tours to exciting locations.' },
  { icon: <FaChartLine />, title: 'Increments Based on Performance', description: 'Salary increments are available based on your performance, so the harder you work, the more you earn!' },
  { icon: <FaGift />, title: 'Grants & Event Funding', description: 'You can apply for grants and funding for events, helping you create meaningful projects.' },
  { icon: <FaBus />, title: 'Travel Allowance & Stay', description: 'When you attend events and conferences, we’ll cover your travel expenses and provide you with a place to stay.' },
  { icon: <FaLightbulb />, title: 'Culture & Personal Development Sessions', description: 'Take part in fun and inspiring personal development sessions to grow your skills and mindset.' },
  { icon: <FaHandshake />, title: 'Networking & Connections', description: 'Meet amazing people and build connections with professionals, giving you a strong network for your career.' },
  { icon: <FaUserTie />, title: 'Permanent ID with Salary', description: 'The best interns get a Permanent ID and a fixed salary, securing a permanent role in the foundation.' },
  { icon: <FaTrophy />, title: 'Awards & Prizes', description: 'There are awards and prizes for the best-performing interns, making your hard work even more rewarding.' },
  { icon: <FaGlobe />, title: 'Foreign Trip for Top Team Members', description: 'Top-performing team members will get the opportunity to go on an international trip!' },
  { icon: <FaTicketAlt />, title: 'Free Tickets to International Events & Conferences', description: 'You’ll get free tickets to international events and conferences, expanding your learning and experiences.' },
];

const hiringProcess = [
    { icon: <FaBullseye />, title: 'Application Submission', description: 'Submit your application through our CAF with your resume and cover letter.' },
    { icon: <FaClipboard />, title: 'Profile Screening', description: 'We will review your application, portfolio, and experience to ensure you’re a good fit for the internship.' },
    { icon: <FaGraduationCap />, title: 'Interview Round', description: 'Shortlisted candidates will be invited to a virtual interview to assess your skills and potential.' },
    { icon: <FaChartBar />, title: 'Notice Period', description: 'After selection, serve a 14-day notice period before officially joining Uniford.' },
    { icon: <FaUniversity />, title: 'Training Program', description: 'Attend a 5-day training period to learn about Uniford Foundation’s values and tools.' },
    { icon: <FaAward />, title: 'Official Onboarding', description: 'After successful training, start your internship and receive access to your Scholar ID and Golden Card.' },
  ];
