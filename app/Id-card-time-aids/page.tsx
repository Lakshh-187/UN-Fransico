// pages/id-card-time-aid.js

"use client";
import Image from "next/image";
import {
  FaFileInvoiceDollar,
  FaInfoCircle,
  FaUserCheck,
  FaDollarSign,
  FaCalendarCheck,
  FaCheckSquare,
  FaAward,
  FaBell,
  FaKey,
  FaTicketAlt,
  FaUsers,
  FaHome,
  FaLock,
  FaExchangeAlt,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Dear Scholars,",
    content: [
      "We understand that many of you may face challenges in completing the online payment for your Scholar ID card due to unavailability of funds or other circumstances beyond your control. To support you and ensure no one misses out on valuable opportunities, we are introducing a special ID-Card Time Aid.",
    ],
    icon: <FaInfoCircle className="text-blue-500 w-6 h-6" />,
  },
  {
    title: "What is ID-Card Time Aid?",
    content: [
      "This initiative allows eligible scholars to apply for the ID card during a fixed session without having to pay the refundable membership fee immediately. This way, you won’t miss out on securing your ID card even if you’re unable to make a payment during the session.",
    ],
    icon: <FaFileInvoiceDollar className="text-green-500 w-6 h-6" />,
    image: "https://i.ibb.co/6RPy0mn/an-illustration-of-a-student-holding-an-id-card-fo-umvdbyz1-Rke-L18-PZZ3ei-GQ-Ap4-ZVWRw-Qp-STOWG2i-H.jpg", // Add appropriate image path
  },
  {
    title: "How It Works:",
    icon: <FaUserCheck className="text-purple-500 w-6 h-6" />,
    content: [
      {
        heading: "1. Apply Now, Activate Later",
        details: [
          "You can fill out the ID card form during the open session without paying the refundable fee at that moment.",
          "Once your membership is activated in the future, your ID card’s Secret Key will automatically be activated one week before the next round of internship or event applications.",
        ],
        icon: <FaDollarSign className="text-yellow-500 w-5 h-5 mr-3" />,
      },
      {
        heading: "2. Activation Before Deadlines",
        details: [
          "You’ll need to activate your ID card 7-12 days before the opening of applications for UNSIP, CAF, ASAF, or any conferences and events.",
        ],
        icon: <FaCalendarCheck className="text-indigo-500 w-5 h-5 mr-3" />,
      },
      {
        heading: "3. Eligibility Criteria",
        details: [
          "Please note that this aid is only available for scholars who meet the eligibility criteria for the ID card.",
        ],
        icon: <FaCheckSquare className="text-pink-500 w-5 h-5 mr-3" />,
      },
    ],
    image: "https://i.ibb.co/Gpt28Zn/a-digital-design-with-a-countdown-timer-and-a-digi-4rrl6g-Ab-RM24-Hsn-CA5-AVe-Q-d-BQcg-DYd-TGGhdk-Gz.jpg", // Add appropriate image path
  },
  {
    title: "Why Are We Offering This?",
    content: [
      "We recognize that many of you are eager to apply for internships and events but are held back due to payment limitations during the ID card application sessions. By offering this ID-Card Time Aid, we ensure that you have the opportunity to stay involved and access the resources, internship opportunities, and events that are crucial to your academic and professional growth.",
    ],
    icon: <FaAward className="text-red-500 w-6 h-6" />,
    image: "https://i.ibb.co/2KZ4f0F/a-design-featuring-a-diverse-group-of-scholars-exc-1-OADAwn-TR4-CMZcvyk-QI9-LA-h09d-Iclw-Sa-KXLkb9yw.jpg", // Add appropriate image path
  },
  {
    title: "ID Card Benefits & Applications",
    icon: <FaBell className="text-pink-500 w-6 h-6" />,
    content: [
      {
        heading: "● Apply for Goodies:",
        details: [
          "Use your Scholar ID to apply for exclusive goodies, giveaways, and organization T-shirts.",
        ],
        icon: <FaTicketAlt className="text-indigo-500 w-5 h-5 mr-3" />,
      },
      {
        heading: "● Free Travel & Accommodation:",
        details: [
          "ID card holders enjoy free travel and stay accommodation during official events organized by Uniford.",
        ],
        icon: <FaHome className="text-green-500 w-5 h-5 mr-3" />,
      },
      {
        heading: "● ID Card with Secret Key:",
        details: [
          "Your ID card comes with a Secret Key, which is essential for:",
          "■ CAF (Common Application Form) access",
          "■ Fresher Internship Applications",
          "■ Event Participation",
          "This key guarantees 100% priority in accessing opportunities and verifying your scholar status.",
        ],
        icon: <FaKey className="text-purple-500 w-5 h-5 mr-3" />,
      },
    ],
    image: "https://i.ibb.co/QCD7bg2/a-colorful-design-with-a-student-flashing-their-id-Oe-ZAJDIORV66h-Dp7lrvzn-Q-0u-Nbu-Ou-FQb-G0m-Iae9.jpg", // Add appropriate image path
  },
  {
    title: "Limited ID Cards Per Session",
    icon: <FaLock className="text-red-500 w-6 h-6" />,
    content: [
      {
        heading: "● Availability:",
        details: [
          "The number of ID cards issued in each session is limited and based on several factors, such as:",
          "■ Available seats",
          "■ Capacity",
          "■ Vacancies and hiring needs",
          "Make sure you apply early to secure your spot!",
        ],
        icon: <FaExchangeAlt className="text-yellow-500 w-5 h-5 mr-3" />,
      },
    ],
    image: "https://i.ibb.co/r47zhjH/a-bold-and-striking-design-with-a-large-limited-st-gg5-U036-S8yr-M6mgn-RCr-Mg-EGokt-Ub-SJqm-RQqj68c.jpg", // Add appropriate image path
  },
  {
    title: "ID Card Activation & Refund Process",
    icon: <FaCertificate className="text-green-500 w-6 h-6" />,
    content: [
      {
        heading: "● Payment Gateway:",
        details: [
          "We use Razorpay as our secure payment gateway. When you pay your refundable fee, we only receive a Unique ID from Razorpay, which is used to activate your ID card.",
        ],
        icon: <FaDollarSign className="text-green-500 w-5 h-5 mr-3" />,
      },
      {
        heading: "● Refund Process:",
        details: [
          "Your Unique ID from Razorpay is also used during the refund process, ensuring that your fee is returned as per our terms and conditions.",
        ],
        icon: <FaExchangeAlt className="text-yellow-500 w-5 h-5 mr-3" />,
      },
    ],
    image: "https://i.ibb.co/p0w4phP/a-professional-illustration-of-a-student-receiving-Hr-TJOGy6-Rmy0-N9-SKx-UOXkw-ED2-Wrx1p-R3-SYK53b-L.jpg", // Add appropriate image path
  },
  {
    title: "Closing Remarks",
    content: [
      "We hope that this ID-Card Time Aid helps you overcome any obstacles, and we look forward to seeing you participate in all the exciting opportunities that lie ahead!",
      "Stay proactive and make the most of this aid to enhance your journey as a UN-Francisco Scholar.",
      "Best Regards,",
      "The UN-Francisco Team",
    ],
    icon: <FaGraduationCap className="text-indigo-500 w-6 h-6" />,
  },
];

export default function IdCardTimeAid() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-900">UN-Francisco <span className="text-blue-600">Id-Card Time Aid</span></h1>
          <p className="mt-2 text-lg text-gray-600"></p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className={`mb-12 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 ${index !== 0 && index !== sections.length - 1 ? "flex" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {section.image && index !== 0 && index !== sections.length - 1 && (
              <div className="w-1/2 mr-4">
                <Image src={section.image} alt={section.title} width={400} height={300} className="rounded-lg" />
              </div>
            )}
            <div className={`w-full ${section.image ? "w-1/2" : ""}`}>
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold ml-2">{section.title}</h2>
              </div>
              {section.content.map((item, i) => (
                <div key={i} className="mb-4">
                  {typeof item === "string" ? (
                    <p className="text-gray-700">{item}</p>
                  ) : (
                    <>
                      <h3 className="font-semibold">{item.heading}</h3>
                      {item.details.map((detail, j) => (
                        <div key={j} className="flex items-start mb-1">
                          {item.icon}
                          <p className="ml-2 text-gray-600">{detail}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
}
