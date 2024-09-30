'use client';
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Step({ step, index }) {
  return (
    <motion.section
      className="mb-12 bg-white rounded-lg shadow-md overflow-hidden"
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
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-4">
            {step.icon}
            <h2 className="text-2xl font-semibold ml-2">{step.title}</h2>
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
                  <FaCheckCircle className="text-green-500 w-5 h-5 mr-3" aria-hidden="true" />
                </span>
                <div>
                  <strong>{item.heading}</strong>
                  <p className="ml-6 text-gray-700">{item.details}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500"
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
  )
}
