// components/CardSection.tsx
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

interface CardProps {
  title: string;
  description: string;
  pdfLink: string;
}

const Card: React.FC<CardProps> = ({ title, description, pdfLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-72 w-72">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        <AiOutlineDownload className="mr-2" />
        Download PDF
      </a>
    </div>
  );
};

const CardSection4: React.FC = () => {
  return (
    <section className="p-8 bg-gray-100 flex flex-col md:flex-row gap-6 items-center justify-center">
      {/* First Card */}
      <Card
        title="Card Title 1"
        description="This is the description for the first card. It provides a brief overview of the content."
        pdfLink="/path-to-your-first-pdf.pdf" // Replace with actual PDF path
      />

      {/* Second Card */}
      <Card
        title="Card Title 2"
        description="This is the description for the second card. It provides additional information on another topic."
        pdfLink="/path-to-your-second-pdf.pdf" // Replace with actual PDF path
      />
    </section>
  );
};

export default CardSection4;
