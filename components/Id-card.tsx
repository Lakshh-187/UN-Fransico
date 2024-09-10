// components/ScholarIDCard.js
import Image from 'next/image';

const ScholarIDCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10">
      {/* Left Side: Image */}
      <div className="md:w-1/3 w-full flex justify-center items-center">
        <Image
          src="/id-card.jpg" // Add your image path here
          alt="Scholar ID Card"
          width={250}
          height={1000}
          className="rounded-xl h-full w-full"
        />
      </div>

      {/* Right Side: Data */}
      <div className="md:w-2/3 w-full space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">Eligibility Criteria for UN Francisco Scholar ID Card</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold">📚 Academic Performance</h3>
            <p>Students must have achieved at least <strong>60% marks</strong> in aggregate or an equivalent grade in any stream from a recognized Board, University, Council, or a three-year diploma program.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🎓 Eligible Courses & Streams</h3>
            <p>The Scholar ID card is available for students in:</p>
            <ul className="list-disc ml-5">
              <li>9th, 10th, 11th, and 12th Grades</li>
              <li>Engineering, Management, Mass Media, and other professional courses related to Computer Science</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🆔 Scholar ID Card Benefits</h3>
            <div>
              <h4 className="font-medium">ID Card with Secret Key</h4>
              <p>Scholars receive an ID card containing a secret key. This key is used for the Common Application Form (CAF) and Fresher Internship applications. It ensures verification of scholars and guarantees 100% priority in benefits and opportunities.</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium">🎟️ Event Participation & Free Access</h4>
            <p>The Scholar ID cards also serve as Member Cards for event participation. Scholars get free entry to events, conferences, and organization activities by showing their ID.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarIDCard;
