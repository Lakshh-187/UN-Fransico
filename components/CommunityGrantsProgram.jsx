import Image from 'next/image';

export default function CommunityGrantsPage() {
  return (
    <div className="max-w-4xl shadow-lg mx-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Community Grants Program</h1>
        <p className="text-lg max-w-2xl mx-auto">
          The Community Grant Program provides support to those who are leading the charge in expanding the ICP community. 
          It is dedicated to empowering outstanding teams and individuals with visionary ideas and concrete plans to make a real difference.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700">
            Apply for Community Grant
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            See Community Grant handbook
          </a>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image placeholders - replace with actual images */}
        {Array(12).fill().map((_, index) => (
          <div key={index} className="w-full h-64 relative">
            <Image 
              src={`/community-image/image${index + 1}.jpg`} 
              alt={`Community event ${index + 1}`} 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
