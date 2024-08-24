"use client";
import Image from "next/image";
import React, { useState } from "react";

const Privacy = ({}) => {
  const [formData, setFormData] = useState({
    lastUpdated: "2021-10-10",
    content:
      "This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you utilize our Service. It also informs you about your privacy rights and the legal protections in place to safeguard your information.",
  });

  const RetentionData = [
    {
      sn: 1,
      content:
        "The Foundation will keep Your Personal Data only for the duration necessary to fulfill the purposes outlined in this Privacy Policy.",
    },
    {
      sn: 2,
      content:
        "Your Personal Data will be retained by the Foundation as long as required to meet legal obligations, resolve disputes, and enforce agreements and policies.",
    },
    {
      sn: 3,
      content:
        "Additionally, Usage Data will be retained for internal analysis purposes, typically for a shorter duration, unless needed for security enhancement or legal compliance.",
    },
    {
      sn: 4,
      content:
        "We will ensure that Your data is securely treated and managed in accordance with this Privacy Policy, regardless of any transfers to locations outside Your jurisdiction.",
    },
    {
      sn: 5,
      content:
        "Your consent to this Privacy Policy indicates Your acceptance of such transfers and the Foundation's commitment to maintaining data security.",
    },
    {
      sn: 6,
      content:
        "The Foundation will implement necessary measures to guarantee the security and adherence to this Privacy Policy when transferring Your Personal Data to other entities or countries.",
    },
    {
      sn: 7,
      content:
        "In the event of a business transaction like a merger or acquisition, Your Personal Data may be transferred, with prior notice to You.",
    },
    {
      sn: 8,
      content:
        "Under specific circumstances, such as legal obligations or valid requests from public authorities, the Foundation may disclose Your Personal Data.",
    },
    {
      sn: 9,
      content:
        "Disclosure may be necessary to comply with the law, protect Foundation rights or property, investigate potential misconduct, or ensure the safety of Service Users or the public.",
    },
    {
      sn: 10,
      content:
        "The Foundation is dedicated to safeguarding Your Personal Data and will act in accordance with legal and ethical standards regarding its disclosure and retention.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      \
      <img
        src="https://i.ibb.co/8YhKdFh/problem-statement-page.png"
        alt="..."
        className="w-full h-[30rem] mb-7"
      />
      <div className="flex flex-col px-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl">Privacy Policy</h1>
          <p>Last Updated {formData.lastUpdated}</p>
          <p>{formData.content}</p>
        </div>

        <div>
          <div className="w-full h-[70px] py-4 flex items-center p-3 gap-4 shadow-md bg-gradient-to-r from-yellow-200 to-white my-6">
            <Image
              src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
              height={30}
              width={30}
              alt="..."
              className="rounded-full"
            />
            <div>
              <p className="font-bold">Data Collection and Usage Policy</p>
            </div>
          </div>
          <p className="font-semibold">Types of Data Collected</p>
          <ul>
            <li>
              <div className="my-5">
                <p className="font-semibold ">Personal Data</p>
                <p>
                  When you engage with Our Service, We may request certain
                  personally identifiable information from You. This information
                  may include, but is not limited to:
                </p>
                <ul>
                  <li>Email Address</li>
                  <li>First Name and Last Name</li>
                  <li>Phone Number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>
              </div>
            </li>
            <li>
              <p className="font-semibold my-3 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
                Usage Data
              </p>
              <p className="my-3">
                Usage Data is automatically collected when You interact with the
                Service. Usage Data may encompass various information, such as
                Your Device{`'`}s Internet Protocol (IP) address, browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the duration of Your stay on those
                pages, unique device identifiers, and other diagnostic data.
                When accessing the Service via a mobile device, We may
                automatically collect specific information, including, but not
                limited to, the type of mobile device You utilize, Your mobile
                device{`'`}s unique ID, the IP address of Your mobile device,
                Your mobile operating system, the type of mobile Internet
                browser You employ, unique device identifiers, and other
                diagnostic data. Additionally, We may gather information that
                Your browser sends whenever You visit our Service, or when You
                access the Service through a mobile device.
                <p />
                <p className="my-3">
                  Information from Third-Party Social Media Services Our Service
                  allows You to create an account and log in using certain
                  Third-party Social Media Services, including Google, Facebook,
                  and Twitter. Should You opt to register through or grant us
                  access to a Third-Party Social Media Service, We may collect
                  Personal data already associated with Your Third-Party Social
                  Media Service account. This may include Your name, email
                  address, activities, or contact list associated with that
                  account. You may also have the opportunity to share
                  supplementary information with the Company via Your
                  Third-Party Social Media Service account. By providing such
                  information and Personal Data during registration or
                  otherwise, You authorize the Company to utilize, share, and
                  store it in accordance with this Privacy Policy.
                </p>
                <p className="my-3">
                  Tracking Technologies and Cookies To enhance and analyze Our
                  Service, We utilize tracking technologies that gather and
                  store certain information. These technologies may include:
                  Cookies or Browser Cookies: These are small files placed on
                  Your Device. You can configure Your browser to reject all
                  Cookies or notify You when a Cookie is being sent. Flash
                  Cookies: Certain aspects of Our Service may employ local
                  stored objects (or Flash Cookies) to collect and store
                  information about Your preferences or activity on the Service.
                  Flash Cookies are managed separately from Browser Cookies. Web
                  Beacons: Specific sections of Our Service and emails may
                  contain small electronic files known as web beacons (or clear
                  gifs, pixel tags, and single-pixel gifs). These enable the
                  Company, for instance, to track users who have visited certain
                  pages or opened an email, and for other website-related
                  statistics. Cookies may be {""}Persistent{""} or
                  {""}Session{""} Cookies. Persistent Cookies remain on Your
                  personal computer or mobile device even after You go offline,
                  while Session Cookies are deleted when You close Your web
                  browser.
                </p>
                We employ both Session and Persistent Cookies for the following
                purposes:
              </p>
            </li>
            <li>
              <div className="my-6">
                <p className="font-semibold my-2 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                  Utilization of Your Personal Data
                </p>
                <p>
                  The Foundation may employ Personal Data for the following
                  objectives: To furnish and sustain our Service, encompassing
                  monitoring the usage of our Service. To administer Your
                  Account: Managing Your registration as a user of the Service.
                  The Personal Data You provide grants You access to various
                  functionalities of the Service available to registered users.
                  For contract performance: Executing, adhering to, and
                  completing the purchase contract for products, items, or
                  services You have acquired or any other contract with Us
                  via the Service.
                </p>
              </div>
            </li>

            {/* To establish communication with you*/}
            <li>
              <div className="w-full h-[70px] py-4 flex items-center p-3 gap-4 shadow-md bg-gradient-to-r from-yellow-200 to-white my-6">
                <Image
                  src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                  height={30}
                  width={30}
                  alt="..."
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold ">To Establish Connection With You</p>
                </div>
              </div>
              <p>
                Reaching out to You via email, telephone calls, SMS, or other
                electronic communication forms, such as mobile application push
                notifications, regarding updates or informative communications
                related to functionalities, products, or contracted services,
                including security updates when necessary or reasonable for
                their execution. To furnish You with news, special offers, and
                general information about other goods, services, and events
                similar to those You have already purchased or inquired about,
                unless You have opted not to receive such information. To manage
                Your requests: Addressing and overseeing Your requests to Us.
                For business transfers: Utilizing Your information to assess or
                conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
              </p>
              <p className="my-4">
                <span className="font-semibold">For Other Purposes</span>
                <br /> Employing Your information for other purposes, such as
                data analysis, identifying usage trends, determining the
                effectiveness of our promotional campaigns, and evaluating and
                enhancing our Service, products, services, marketing, and Your
                experience. We may share Your personal information in the
                following circumstances: With Service Providers: Sharing Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, and to contact You. For business
                transfers: Sharing or transferring Your personal information in
                connection with, or during negotiations of, any merger, sale of
                Foundation assets, financing, or acquisition of all or a portion
                of Our business to another company. With Affiliates: Sharing
                Your information with Our affiliates, and requiring those
                affiliates to adhere to this Privacy Policy. Affiliates
                encompass Our parent foundation and any other subsidiaries,
                joint venture partners, or entities under common control with
                Us. With business partners: Sharing Your information with Our
                business partners to provide You with certain products,
                services, or promotions. With other users: Your personal
                information may be viewed by all users and may be publicly
                distributed outside when You share personal information or
                interact in public areas with other users. If You interact with
                other users or register through a Third-Party Social Media
                Service, Your contacts on the Third-Party Social Media Service
                may view Your name, profile, pictures, and activity description.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You, and view Your profile. With Your
                consent: Disclosing Your personal information for any other
                purpose with Your consent.
              </p>
            </li>

            {/* Retention of Your Personal Data:*/}
            <li>
              <div className="w-full h-[70px] py-4 flex items-center p-3 gap-4 shadow-md bg-gradient-to-r from-yellow-200 to-white my-6">
                <Image
                  src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                  height={30}
                  width={30}
                  alt="..."
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">About Your Personal Data</p>
                </div>
              </div>
              <ol type="1">
                {RetentionData.map((data, index) => (
                  <RetentionOfYourPersonalData
                    key={index}
                    sn={data.sn}
                    content={data.content}
                  />
                ))}
              </ol>
            </li>
          </ul>

          <div className="my-6">
            <h3 className="font-semibold flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
              Contact Us:
            </h3>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <h3>By email: support@uniwave.org</h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;

const RetentionOfYourPersonalData = ({ sn, content }: any) => (
  <li className="flex items-center my-2">
    <span className="font-bold mr-2">
      <Image
        src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
        height={10}
        width={10}
        alt="..."
        className="rounded-full"
      />
    </span>
    {content}
  </li>
);
