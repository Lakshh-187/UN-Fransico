// pages/internship-guide.js

"use client";
import Image from "next/image";
import {
  FaBriefcase,
  FaFileContract,
  FaRocket,
  FaStar,
  FaAward,
  FaBullhorn,
  FaGraduationCap,
  FaCheckCircle,
  FaBook,
  FaBell,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaClipboardCheck,
  FaHandHoldingUsd,
  FaCertificate,
  FaTimesCircle,
  FaGift,
} from "react-icons/fa";
import { motion } from "framer-motion";

const internshipSteps = [
  {
    title: "Internship Application Process",
    image: "https://i.ibb.co/4dQB6R0/a-sleek-design-with-two-calendars-marked-winter-an-Yg-Kii-Mom-Tc-3f-B7-SWv-YT5-Q-HZc-Ynwej-RRSLTE9-F.jpg",
    alt: "Internship Application Process",
    icon: <FaBriefcase className="text-blue-500 w-6 h-6" />,
    content: [
      {
        heading: "Application Openings:",
        details: [
          {
            text: "Internship applications are opened twice a year, during the Winter and Summer sessions.",
            icon: <FaCalendarAlt className="text-indigo-500 w-5 h-5 mr-2" />,
          },
          {
            text: "All eligible scholars are notified via the Scholar Section to stay updated about upcoming opportunities.",
            icon: <FaUsers className="text-indigo-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "How It Works:",
        details: [
          {
            text: "Scholars apply through the CAF (Common Application Form) or the ASAF (Advanced Super Application Form) to reach multiple companies at once.",
            icon: <FaLightbulb className="text-indigo-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
  {
    title: "Common Application Form (CAF)",
    image: "https://i.ibb.co/dmdRpKT/a-digital-illustration-of-a-student-filling-out-a-Gj9e-A9v6-S36umhu-TINJl-Lg-r-J3-MTWLj-Tum-A-2nem-I.jpg",
    alt: "Common Application Form",
    icon: <FaFileContract className="text-green-500 w-6 h-6" />,
    content: [
      {
        heading: "What is CAF?",
        details: [
          {
            text: "The CAF allows scholars to fill out a single form that connects them with multiple companies' HR pools. It simplifies the internship search process, giving scholars access to genuine opportunities.",
            icon: <FaClipboardCheck className="text-green-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Only companies with good work culture and positive feedback are included in the CAF system, ensuring a valuable internship experience for scholars.",
            icon: <FaUsers className="text-green-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "Who Gets Priority?",
        details: [
          {
            text: "Scholars who have already completed internships with Uniford and gained practical knowledge are given priority in the application process, as they are recognized and verified.",
            icon: <FaCheckCircle className="text-green-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "What if I Don’t Get Selected Through CAF?",
        details: [
          {
            text: "If a scholar doesn't get an internship through CAF due to a lack of experience or skills, they will be offered internships through either the UNSIP (Uniford Special Internship Program) or one of our alliance companies.",
            icon: <FaHandHoldingUsd className="text-green-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
  {
    title: "Advanced Super Application Form (ASAF)",
    image: "https://i.ibb.co/RjqRxBd/a-modern-sleek-design-of-a-highly-experienced-scho-zzhj-IA98-Q86exk8e-JFg-IIw-Dy-DUl-tr-SIGXU-d-Yw7q.jpg",
    alt: "Advanced Super Application Form",
    icon: <FaRocket className="text-yellow-500 w-6 h-6" />,
    content: [
      {
        heading: "What is ASAF?",
        details: [
          {
            text: "ASAF is an advanced version of the CAF, designed for scholars with prior experience, giving them access to more specialized and higher-level internship opportunities.",
            icon: <FaLightbulb className="text-yellow-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Scholars who have completed internships and demonstrated strong skills are given priority in ASAF applications.",
            icon: <FaCheckCircle className="text-yellow-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
  {
    title: "Uniford Special Internship Program (UNSIP)",
    image: "https://i.ibb.co/wCgM95T/a-positive-and-supportive-design-showing-a-fresher-ag-NVr-VPt-QFO-Mn-Imc-G-6r-A-ua-Dj6iv-Tw-OIYBnfka.jpg",
    alt: "Uniford Special Internship Program",
    icon: <FaStar className="text-purple-500 w-6 h-6" />,
    content: [
      {
        heading: "Special Internships for Freshers:",
        details: [
          {
            text: "Freshers who don’t secure internships through CAF or ASAF due to a lack of experience can apply for UNSIP, where they will receive special internships directly through Uniford.",
            icon: <FaGraduationCap className="text-purple-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Guided Learning: Scholars are provided with guide videos, resources, and assignments to gain practical knowledge before and during their internships.",
            icon: <FaBook className="text-purple-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "Recognition & Awards:",
        details: [
          {
            text: "Best-performing interns in UNSIP are eligible for awards, Green Cards, and other goodies.",
            icon: <FaAward className="text-purple-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
  {
    title: "Green Card Benefits",
    image: "/internship-guide/image-3.jpg",
    alt: "Green Card Benefits",
    icon: <FaAward className="text-red-500 w-6 h-6" />,
    content: [
      {
        heading:
          "The Green Card is a special recognition awarded to the top-performing scholars. It comes with the following privileges:",
        details: [
          {
            text: "ID Card Renewal: Automatically renew your Scholar ID for an additional year.",
            icon: <FaCalendarAlt className="text-red-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Extra Internship Opportunities: Gain one more internship through the CAF.",
            icon: <FaBriefcase className="text-red-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Free Event Access: Attend events, conferences, hackathons, and even social tours for free.",
            icon: <FaBell className="text-red-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Uniford Welcome Kit: The top Green Card holders receive a special kit filled with surprises.",
            icon: <FaGift className="text-red-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Paid Internship Referral: Get a referral for paid internships, giving you a head start in your career.",
            icon: <FaHandHoldingUsd className="text-red-500 w-5 h-5 mr-2" />,
          },
          {
            text: "Letter of Recommendation (LOR): Receive a certificate and a Letter of Recommendation from UFTRU (Uniford Talent Recognition Unit).",
            icon: <FaCertificate className="text-red-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
  {
    title: "Internship Challenges & Solutions",
    image: "/internship-guide/image-1.jpg",
    alt: "Internship Challenges",
    icon: <FaBullhorn className="text-pink-500 w-6 h-6" />,
    content: [
      {
        heading: "Challenges:",
        details: [
          { text: "Few genuine internships; multiple manual applications.", icon: <FaTimesCircle className="text-pink-500 w-5 h-5 mr-2" /> },
          { text: "High rejection rates for freshers.", icon: <FaTimesCircle className="text-pink-500 w-5 h-5 mr-2" /> },
          { text: "Training programs disguised as internships.", icon: <FaTimesCircle className="text-pink-500 w-5 h-5 mr-2" /> },
        ],
      },
      {
        heading: "Solutions:",
        details: [
          { text: "CAF for easy application across companies.", icon: <FaLightbulb className="text-pink-500 w-5 h-5 mr-2" /> },
          { text: "Guaranteed free internships through UNSIP.", icon: <FaCheckCircle className="text-pink-500 w-5 h-5 mr-2" /> },
          { text: "Advanced opportunities via Uniwave's Get Hired portal.", icon: <FaRocket className="text-pink-500 w-5 h-5 mr-2" /> },
        ],
      },
    ],
  }, 
  {
    title: "Scholar Categories",
    image: "/internship-guide/image-2.jpg",
    alt: "Scholar Categories",
    icon: <FaGraduationCap className="text-indigo-500 w-6 h-6" />,
    content: [
      {
        heading: "Fresher Scholars with Learning:",
        details: [
          {
            text: "Scholars with limited experience but willing to learn through guided internships.",
            icon: <FaBook className="text-indigo-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "Fresher Scholars with Practical Skills:",
        details: [
          {
            text: "Scholars who have some project experience and are seeking more advanced internships.",
            icon: <FaLightbulb className="text-indigo-500 w-5 h-5 mr-2" />,
          },
        ],
      },
      {
        heading: "Experienced Scholars:",
        details: [
          {
            text: "Scholars with 2+ internships under their belt, ready for higher-level opportunities through CAF or ASAF.",
            icon: <FaUsers className="text-indigo-500 w-5 h-5 mr-2" />,
          },
        ],
      },
    ],
  },
];

export default function InternshipGuide() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col ">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to the <span className="text-blue-600">UN-Francisco Internship Guide</span>
          </h1>
          <h1 className="text-base font-normal text-gray-900 mb-3">
          Helping scholars like YOU unlock endless internship opportunities!
          </h1>
          <h1 className="text-base font-normal text-gray-900">
          At UN-Francisco, we understand the challenges faced by students in securing valuable internships. That's why we've created a unique, streamlined process that connects you with top companies and helps you stand out. Let’s explore how our different programs and tools can help you land your dream internship.
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
        {internshipSteps.map((step, index) => (
          <motion.section
            key={index}
            className="mb-12 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={500}
                  height={300}
                  className="object-fill w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h2 className="text-2xl font-semibold ml-2 text-gray-800">
                    {step.title}
                  </h2>
                </div>
                <ul className="list-none space-y-6">
                  {step.content.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                      <span className="mt-1">
                        <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" />
                      </span>
                      <div>
                        <strong className="text-gray-800">
                          {item.heading}
                        </strong>
                        {Array.isArray(item.details) ? (
                          <ul className="ml-6 list-disc list-inside text-gray-700 mt-1 space-y-4">
                            {item.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="flex items-start">
                                <span className="mt-1">
                                  {detail.icon}
                                </span>
                                <p className="ml-2">{detail.text}</p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="ml-6 text-gray-700 mt-1">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
}
