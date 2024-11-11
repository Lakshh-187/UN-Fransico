"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Footer() {
  const footerSections = [
    {
      title: "Our Programs",
      items: [
        { label: "Scholars Program", link: "https://www.uniwave.in/scholar" },
        { label: "Rising Unicorns", link: "https://www.risingunicorn.com/" },
        { label: "Grow Up", link: "https://www.uniwave.in/grow-up" },
        {
          label: "She Inspires",
          link: "https://www.sheinspires.com/#be-inspired-video",
        },
        {
          label: "Career Guide",
          link: "/career-guide",
        },
        {
          label: "Boarding",
          link: "/on-boarding",
        },
        {
          label: "MOU",
          link: "/mou",
        },
      ],
    },
    {
      title: "About Us",
      items: [
        { label: "Terms & Conditions", link: "/terms-conditions" },
        { label: "Privacy & Policy", link: "/privacy-policy" },
        { label: "Disclaimer", link: "/about" },
        { label: "Benefits", link: "/benefits" },
        { label: "Id card", link: "/Id-card" },
        { label: "Uniford Info", link: "/about-features" },
      ],
    },
    {
      title: "Get In Touch",
      items: [
        { label: "info@uniford.org", link: "mailto:info@uniford.org" },
        { label: "+91-9311777388", link: "tel:+919311777388" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-950 mt-10 w-full">
      <div className="max-w-screen-2xl mx-auto md:grid md:grid-cols-5 md:gap-4 flex flex-col">
        <div className="text-white md:col-span-2 p-4 h-full">
          <ContactInfo />
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className="text-white md:col-span-1 p-4 h-full">
            <FooterItem title={section.title} items={section.items} />
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

interface FooterItemProps {
  title: string;
  items: { label: string; link: string }[];
}

const FooterItem: React.FC<FooterItemProps> = ({ title, items }) => {
  const router = useRouter();

  return (
    <div className="p-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="space-y-5 mt-5">
        {items.map((item, index) => (
          <p
            key={index}
            className="text-white hover:cursor-pointer hover:underline"
            onClick={() => {
              router.push(item.link);
            }}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-10">
      <div className="mb-4 bg-white w-fit p-4 rounded-md">
        <Image
          alt="logo"
          src="/logo.svg"
          priority={true}
          height={40}
          width={40}
        />
      </div>
      <hr className="h-px mt-8 mb-3 bg-white border-0" />
      <div className="hidden md:flex justify-between items-center">
        <p className="text-xl font-semibold">Stay Updated</p>
        <button
          onClick={() => {
            router.push("/blogs");
          }}
          className="flex items-center rounded-lg p-3 bg-white justify-center text-black w-36 h-12 font-semibold"
        >
          Blogs
        </button>
        <button
          onClick={() => {
            router.push("/donation");
          }}
          className="flex items-center p-5 bg-white justify-center text-black rounded-lg w-36 h-12 font-semibold hover:text-green-500"
        >
          Donate
        </button>
      </div>
      <p className="text-sm text-[#A8A8A8] antialiased mt-5 hidden md:block">
        We will send you updates on the latest opportunities to showcase your
        talent and get hired and rewarded regularly.
      </p>
      <hr className="h-px mt-8 mb-3 bg-white border-0 hidden md:block" />
    </div>
  );
};


