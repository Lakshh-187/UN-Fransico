// import React from "react";
// import Feature from "@/components/about-us/Feature";
// import VMG from "@/components/about-us/VMG";
// import Image from "next/image";
// // import { MdArrowOutward } from "react-icons/md";

// export const metadata = {
//   title: "About Us | Uniwave",
//   description:
//     "Discover the story behind Uniwave – our mission, values, and journey. Learn how we're shaping the future and making an impact.",
// };

// const page = () => {
//   return (
//     <main className="min-h-screen flex items-center justify-center lg:pt-3 pt-10">
//       <div className="flex flex-col w-full h-full">
//         <div className="w-full lg:h-[30rem] flex items-center">
//           <img
//             src="/about/problem.svg"
//             className="lg:h-[30rem]  w-full lg:object-cover object-contain"
//           />
//         </div>
//         <div className="w-full ">
//           <h1 className="font-bold text-xl my-4 p-4 text-gray-400">
//             {`"`} Our aim is to inspire the future leaders to uncover more
//             effective approaches to learning, empowerment, and
//             forging connections.{`"`}
//           </h1>
//         </div>

//         <Feature />
//         <h1 className="font-bold text-4xl px-10 -mt-10 mb-10 text-slate-600">
//           Breaking Barriers, Bridging Talent
//           <br /> We Are the Alliance
//         </h1>
//         <VMG />

//         <section className="px-10 my-20">
//           <h3 className="font-bold text-4xl -mt-10 mb-10 text-slate-600">
//             Contact Us
//           </h3>
//           <div className="flex md:flex-row md:items-center md:justify-start flex-col gap-8 px-10">
//             <div className="w-[15rem] h-[10rem] relative shadow-md p-4 rounded-lg bg-gradient-to-r from-white to-yellow-100 flex flex-col gap-4">
//               <Image
//                 src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
//                 alt="..."
//                 height={30}
//                 width={30}
//                 className="rounded-full absolute -top-5 right-1"
//               />
//               <p>Get in touch with us:</p>
//               <p>
//                 Email:{" "}
//                 <span className="text-blue-400 font-semibold">
//                   support@uniwave.org
//                 </span>
//               </p>
//               <button className="font-semibold opacity-35 bg-gray-200  flex items-center justify-between border border-blue-400 rounded-full px-4 py-2 text-sm w-full">
//                 <p className="relative left-8 text-base text-blue-950">
//                   Uniwave
//                 </p>
//                 <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
//                   {/* <MdArrowOutward /> */}
//                 </div>
//               </button>
//             </div>

//             <div className="w-[15rem] h-[10rem] relative shadow-md p-4 rounded-lg bg-gradient-to-r from-white to-yellow-100 flex flex-col gap-4">
//               <Image
//                 src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
//                 alt="..."
//                 height={30}
//                 width={30}
//                 className="rounded-full absolute -top-5 right-1"
//               />
//               <p>Help Desk & General Query</p>
//               <p className="text-blue-400 font-semibold">
//                 supervisor@uniwave.org
//               </p>
//               <button className="font-semibold opacity-35 bg-gray-200  flex items-center justify-between border border-blue-400 rounded-full px-4 py-2 text-sm w-full">
//                 <p className="relative left-8 text-base text-blue-950">
//                   Uniwave
//                 </p>
//                 <div className="px-2 py-2 flex items-center justify-center bg-[#fac400] rounded-full">
//                   {/* <MdArrowOutward /> */}
//                 </div>
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default page;

// pages/disclaimer.js
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        <p className="text-gray-700 mb-4">
          Our organization distributes premium courses, software, and other digital resources generously donated by individuals and institutions to support underprivileged students.
        </p>
        <p className="text-gray-700 mb-4">
          These resources are intended solely for educational purposes and to empower students who lack access to such opportunities. We ensure that all distributed materials are used in compliance with the original terms and conditions set by the donors.
        </p>
        <p className="text-gray-700 mb-4">
          If you are a rights holder and have any concerns regarding the use or distribution of these resources, please contact us directly to address any issues.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Educational Purpose Only 🎓</h2>
        <p className="text-gray-700 mb-4">
          Our organization is committed to distributing premium courses, software, and other digital resources that have been generously donated by individuals, startups, and institutions. These resources are provided exclusively to support underprivileged students and are intended solely for educational purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Empowering Students 🚀</h2>
        <p className="text-gray-700 mb-4">
          We aim to empower students who lack access to such valuable opportunities, ensuring they can gain the skills and knowledge needed to succeed. By providing these resources, we hope to bridge the gap between potential and opportunity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compliance with Donor Terms 📜</h2>
        <p className="text-gray-700 mb-4">
          We take great care to ensure that all distributed materials are used in strict compliance with the original terms and conditions set by the donors. This helps us maintain transparency and respect the rights of those who have contributed to our cause.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Rights Holder Concerns 💬</h2>
        <p className="text-gray-700 mb-4">
          If you are a rights holder and have any concerns regarding the use or distribution of these resources, please contact us directly. We are committed to addressing any issues promptly and effectively to ensure that all parties are satisfied.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Ethical Resource Utilization 🌍</h2>
        <p className="text-gray-700 mb-4">
          Our mission is not only to educate but also to promote ethical resource utilization. By supporting our program, donors become part of a larger movement aimed at creating social impact and fostering positive change.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚨 Complaint Process</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">1. Reporting Issues 🔍</h3>
        <p className="text-gray-700 mb-4">
          If you discover that any donated product violates company policies, copyrights, or other regulations, please notify us immediately. You can reach out to us via email or support care, and we assure you that appropriate action will be taken.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2. Swift Action 🛑</h3>
        <p className="text-gray-700 mb-4">
          Upon receiving your complaint, we will thoroughly investigate the issue. If the resource is found to be in violation, it will be promptly removed from our platform to ensure compliance and maintain the integrity of our program.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">3. Community Vigilance 👥</h3>
        <p className="text-gray-700 mb-4">
          Since donated resources are listed directly, there may be instances where we are unable to verify them immediately. We rely on our community to help us maintain high standards. If you encounter any questionable resources, please inform us right away.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🎁 Donation Policy</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">1. Valuing Contributions 💎</h3>
        <p className="text-gray-700 mb-4">
          At our organization, we do not accept free donations. We believe in mutual value creation and strive to provide 10x value to those who donate to us. This policy reflects our commitment to respecting the contributions of our donors and ensuring that every donation drives meaningful impact.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">2. Quality Over Quantity 🎯</h3>
        <p className="text-gray-700 mb-4">
          We emphasize the quality and impact of donations rather than the quantity. Our focus is on creating a sustainable and beneficial exchange where donors feel valued and recognized for their contributions.
        </p>

        <blockquote className="text-gray-600 italic my-6 pl-4 border-l-4 border-gray-400">
          “We are not beggars, but partners in creating a brighter future together.” – Uniford Foundation
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us 📧</h2>
        <p className="text-gray-700 mb-4">
          For any issues or to discuss donation opportunities, please reach out to us at <a href="mailto:complain@uniford.org" className="text-blue-500">complain@uniford.org</a>.
        </p>

        <blockquote className="text-gray-600 italic my-6 pl-4 border-l-4 border-gray-400">
          “Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela
        </blockquote>

        <p className="text-gray-700 mb-4">
          If you have any questions or concerns, please reach out to us at <a href="mailto:info@uniford.org" className="text-blue-500">info@uniford.org</a>. We’re here to assist and ensure that our program benefits those in need while respecting the rights of all involved.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;

