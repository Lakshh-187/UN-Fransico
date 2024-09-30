"use client";
import Image from "next/image";
import {
  FaUserPlus,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaCheckCircle,
  FaIdBadge,
  FaBook,
  FaBell,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Step 1: Sign Up for the Portal",
    image: "https://i.ibb.co/FKW0Mwy/a-medium-shot-of-a-student-sitting-at-a-desk-typin-J3-OIG4ct-RVi9j-I8xn-FLVAQ-o0-N3uut-TSxqan1g3-OA4.jpg",
    alt: "Sign Up",
    icon: <FaUserPlus className="text-blue-500 w-6 h-6" />,
    content: [
      {
        heading: "Create an Account:",
        details: "Visit the portal and sign up using your email ID.",
      },
      {
        heading: "Set Your Password:",
        details: "Choose a strong password and ensure you remember it for future logins.",
      },
    ],
    note: "Use a secure email address and a memorable, strong password to protect your account.",
  },
  {
    title: "Step 2: Visit the Membership Page",
    image: "https://i.ibb.co/8KYwFCd/a-vibrant-illustration-of-a-student-holding-a-tabl-wg-DCFUu-YRv-GYD9q-Jx-JLq-BQ-Ih-R-TUGLSJC9r-D-n-u.jpg",
    alt: "Membership",
    icon: <FaFileAlt className="text-green-500 w-6 h-6" />,
    content: [
      {
        heading: "Explore Membership Details:",
        details: "Go through the membership page to understand the resources and benefits.",
      },
      {
        heading: "Check Eligibility:",
        details: "Ensure you meet the eligibility criteria for the ID card, crucial for internships and event access.",
      },
    ],
    note: "Review the eligibility criteria carefully to ensure you qualify for all benefits.",
  },
  {
    title: "Step 3: Pay the Refundable Membership Fees",
    image: "https://i.ibb.co/gdjwJnW/a-digital-illustration-of-a-payment-page-on-a-scre-q-Ym-Wo-Zfs-Ssatcp-Z-t-A2p1g-KLjz-Hpi6-S0-C0f82-G.jpg",
    alt: "Payment",
    icon: <FaMoneyCheckAlt className="text-yellow-500 w-6 h-6" />,
    content: [
      {
        heading: "Make the Payment:",
        details: "Locate the option 'Pay Refundable Membership Fees' and proceed with the payment.",
      },
      {
        heading: "Review the Refund Process:",
        details: "Understand how the refund process works before completing the transaction.",
      },
    ],
    note: "Ensure you review the refund terms to avoid any misunderstandings.",
  },
  {
    title: "Step 4: Activate Your Membership",
    image: "https://i.ibb.co/x7RRvcH/a-positive-and-energetic-design-of-a-student-refre-WYx-Eu4-P7-T2u8v-K-WPCy5b-Q-OG2l86n-FQbi-Zki-YXXe.jpg",
    alt: "Activate Membership",
    icon: <FaCheckCircle className="text-purple-500 w-6 h-6" />,
    content: [
      {
        heading: "Refresh the Portal:",
        details: "Once the payment is made, refresh the page to activate your portal.",
      },
      {
        heading: "Access Your Resources:",
        details: "You will now have access to exclusive sections like Career Track, AI Tools, and more.",
      },
    ],
    note: "Log out and log back in if resources are not immediately available.",
  },
  {
    title: "Step 5: ID Card and Follow for Updates",
    image: "https://i.ibb.co/fMVQJ9z/a-futuristic-design-with-a-student-filling-out-an-Ru-FYi-Jq-WRd-Wi8-MCf8-HWk-MQ-jn-XTQMUURn-Wn-Kk9ea.jpg",
    alt: "ID Card",
    icon: <FaIdBadge className="text-red-500 w-6 h-6" />,
    content: [
      {
        heading: "ID Card Form:",
        details: "After membership activation, you'll see the option to fill out your ID Card Form.",
      },
      {
        heading: "Follow for Updates:",
        details: "Stay informed about upcoming events and internships via the 'Follow for Updates' section.",
      },
    ],
    note: "Regularly check the updates section to stay informed about new opportunities.",
  },
];

const importantNotes = [
  {
    title: "Use Portal Resources",
    details: "Once your membership is active, make the most of the available portal resources.",
    icon: <FaBook className="text-indigo-500 w-5 h-5" />,
  },
  {
    title: "Stay Updated",
    details:
      "Keep an eye on the updates section for news about upcoming internships and events. Eligible students can directly apply for these opportunities through the portal.",
    icon: <FaBell className="text-pink-500 w-5 h-5" />,
  },
];

export default function Membership() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center flex-col">
          <h1 className="text-3xl font-bold text-gray-900">
            UN-Francisco <span className="text-blue-600">Scholar Program</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Activate Your Membership and Access Exclusive Resources
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8 flex-grow">
        {steps.map((step, index) => (
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
                  className="object-cover w-full h-full"
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
                <ul className="list-none space-y-4">
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
                        <p className="ml-6 text-gray-700">{item.details}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <strong className="text-yellow-700">Important Note:</strong>
                  <p className="text-yellow-600">{step.note}</p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* New Important Note Section */}
        <motion.section
          className="mt-16 bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: steps.length * 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Important Note:
          </h2>
          <ul className="space-y-6">
            {importantNotes.map((note, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <span className="mt-1">
                  {note.icon}
                </span>
                <div className="ml-4">
                  <strong className="text-gray-800">{note.title}</strong>
                  <p className="text-gray-700 mt-1">{note.details}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>
    </div>
  );
}
