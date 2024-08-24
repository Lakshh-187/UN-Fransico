"use client";
import Image from "next/image";
import React, { useState } from "react";

const Terms = ({}) => {
  const [formData, setFormData] = useState({
    lastUpdated: "2023-10-15",
    content:
      "Welcome! Before we proceed, let's clarify expectations. Every collaboration has its own terms of use, and here are ours",
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
        src="https://i.ibb.co/TbHWWZw/problem-statement-page-1.png"
        alt="..."
        className="w-full h-[30rem] mb-7"
      />
      <div className="flex flex-col px-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl">Terms & Conditions</h1>
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
              <p className="font-bold">User Agreement</p>
            </div>
          </div>
          <p className="font-semibold">
            Welcome to Uniwave! This agreement governs your use of our website,
            operated by Uniwave Private Limited, accessible at
            https://www.Uniwave.org/. By accessing this website, you agree to
            abide by these terms and conditions. If you do not agree with any
            part of these terms, please refrain from using Uniwave. Definitions
            In this agreement, {`"`}User{`"`}, {`"`}You{`"`}, and {`"`}Your{`"`}{" "}
            refer to the individual accessing this Website and complying with
            the Company{`'`}s terms and conditions. {`"`}The Company{`"`}, {`"`}
            OurUniwave
            We{`"`}, and {`"`}
            Us{`"`} refer to Uniwave Private Limited.
            {`"`}Party{`"`} or {`"`}Parties{`"`} refers to both the User and the
            Company. All terms relate to the offer, acceptance, and
            consideration of payment necessary to engage our services to meet
            the User{`'`}s needs,
          </p>
          <ul>
            <li>
              <div className="my-5">
                <p className="font-semibold ">Cookie Policy</p>
                <p>We do not utilize cookies on our Website</p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">Intellectual Property Rights</p>
                <p>
                  All material on Uniwave is owned by Uniwave Foundation and/or
                  its licensors unless otherwise stated. You may access this
                  Website for personal use, subject to the restrictions outlined
                  in these terms and conditions.
                </p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">User Comments</p>
                <p>
                  Certain areas of this Website allow users to post and exchange
                  opinions and information. Uniwave Private Limited does not
                  filter, edit, publish, or review Comments before they appear
                  on the Website. Comments do not reflect the views and opinions
                  of Uniwave Foundation, its agents, and/or affiliates.
                </p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">Linking to Our Content</p>
                <p>
                  Government agencies, search engines, news organizations, and
                  online directory distributors may link to our Website without
                  prior written approval. Other organizations may request
                  permission to link to our Website.
                </p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">iFrames</p>
                <p>
                  Without prior approval and written permission, you may not
                  create frames around our web pages that alter the visual
                  presentation or appearance of our Website.
                </p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">Content Liability</p>
                <p>
                  We shall not be held responsible for any content that appears
                  on your Website. You agree to protect and defend us against
                  all claims arising from your Website.
                </p>
              </div>

              <div className="my-5">
                <p className="font-semibold ">
                  Please read our Privacy Policy.
                </p>
                <p className="font-semibold ">Reservation of Rights</p>
                <p className="font-semibold ">
                  We reserve the right to request the removal of any links to
                  our Website and to amend these terms and conditions and its
                  linking policy at any time.
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3">
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
                Hyperlinking to our Content
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                    alt="..."
                    className="h-6 w-6 rounded-full"
                  />
                  The organization does not have any negative records with us
                </li>
                <li className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                    alt="..."
                    className="h-6 w-6 rounded-full"
                  />
                  The benefit to us from the visibility of the hyperlink
                  compensates for the absence of Uniwave Foundation
                </li>
                <li className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                    alt="..."
                    className="h-6 w-6 rounded-full"
                  />
                  The link is in the context of general resource information.
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    These organizations may link to our home page as long as the
                    link:
                  </div>
                  <ul className="flex flex-col ms-10">
                    <li>Is not deceptive</li>
                    <li>
                      Does not falsely imply sponsorship, endorsement, or
                      approval of the linking party and its products or services
                    </li>
                    <li>
                      Fits within the context of the linking party’s site.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                    alt="..."
                    className="h-6 w-6 rounded-full"
                  />
                  If you are one of the organizations listed above and are
                  interested in linking to our website, please inform us by
                  sending an e-mail to Uniwave Foundation. Please include your
                  name, your organization{`'`}s name, contact information, as
                  well as the URL of your site, a list of any URLs from which
                  you intend to link to our Website, and a list of the URLs on
                  our site to which you would like to link. Please allow 2-3
                  weeks for a response.
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                      alt="..."
                      className="h-6 w-6 rounded-full"
                    />
                    Approved organizations may hyperlink to our Website as
                    follows:
                  </div>
                  <ul className="ms-10 flex flex-col gap-3">
                    <li>By use of our corporate name</li>
                    <li>
                      By use of the uniform resource locator being linked to
                    </li>
                    <li>
                      By use of any other description of our Website being
                      linked to that makes sense within the context and format
                      of content on the linking party’s site.
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                    alt="..."
                    className="h-6 w-6 rounded-full"
                  />
                  No use of Uniford Foundation{`'`}s logo or other artwork will
                  be allowed for linking absent a trademark license agreement.
                </li>
              </ul>
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
                  License
                </p>
                <ul className="flex flex-col gap-2">
                  <li>
                    Unless otherwise stated, Uniwave Foundation and/or its
                    licensors own the intellectual property rights for all
                    material on Uniwave Foundation. All intellectual property
                    rights are reserved. You may access this material from
                    Uniwave Foundation for your personal use, subject to the
                    restrictions set forth in these terms and conditions.
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="font-bold text-slate-600">
                      You must not:
                    </span>
                    <ul>
                      <div className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          Republish material from Uniwave Foundation
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          Sell, rent, or sub-license material from Uniwave
                          Foundation
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          Reproduce, duplicate, or copy material from Uniwave
                          Foundation
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          Redistribute content from Uniwave Foundation
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li>
                    This Agreement shall commence on the date hereof. Our Terms
                    and Conditions were created with the assistance of a Terms
                    and Conditions Generator.
                  </li>
                  <li>
                    Parts of this website offer an opportunity for users to post
                    and exchange opinions and information in certain areas of
                    the website. Uniwave Foundation does not filter, edit,
                    publish, or review Comments prior to their presence on the
                    website. Comments do not reflect the views and opinions of
                    Uniwave Foundation, its agents, and/or affiliates. Comments
                    reflect the views and opinions of the person who posts them.
                    To the extent permitted by applicable laws, Uniwave
                    Foundation shall not be liable for the Comments or for any
                    liability, damages, or expenses caused and/or suffered as a
                    result of any use of and/or posting of and/or appearance of
                    the Comments on this website.
                  </li>
                  <li>
                    Uniwave Foundation reserves the right to monitor all
                    Comments and to remove any Comments which can be considered
                    inappropriate, offensive, or in breach of these Terms and
                    Conditions.
                  </li>
                  <li className="flex flex-col gap-2">
                    <span className="font-bold text-slate-600">
                      {" "}
                      You warrant and represent that:
                    </span>
                    <ul>
                      <div className="flex flex-col gap-3">
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          You are entitled to post the Comments on our website
                          and have all necessary licenses and consents to do so
                          n
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          The Comments do not invade any intellectual property
                          right, including without limitation copyright, patent,
                          or trademark of any third party
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          The Comments do not contain any defamatory, libelous,
                          offensive, indecent, or otherwise unlawful material
                          which is an invasion of privacy
                        </li>
                        <li className="flex items-center gap-3">
                          <img
                            src="https://i.ibb.co/2d8Qdj5/a-sleek-and-modern-logo-for-approval-features-an-a-ruq-WNyvq-RLGq-Fu-VVvu-KASA-F1m-Poyf-GS1-Kl-Prc-O.jpg"
                            alt="..."
                            className="h-6 w-6 rounded-full"
                          />
                          The Comments will not be used to solicit or promote
                          business or custom or present commercial activities or
                          unlawful activity{" "}
                        </li>
                      </div>
                    </ul>
                  </li>

                  <ul className="flex flex-col gap-3 my-3">
                    <li className="flex flex-col gap-2">
                      <span className="font-bold">Governing Law</span>
                      <p>
                        These terms will be overseen and interpreted according
                        to Indian laws, disregarding conflicts of law
                        principles. Any disputes arising in connection with
                        these terms will be exclusively heard in the courts of
                        Delhi.
                      </p>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className="font-bold">Report Abuse</span>
                      <p>
                        Notify about any abuse or violation of these Terms by
                        promptly reporting it to us. Users are accountable for
                        all content they upload, and Uniwave.org does not
                        endorse or verify user-generated content. Legal
                        liability may arise from content that violates
                        copyright, trademark, or contains defamatory remarks.
                      </p>
                      <p>
                        Email:{" "}
                        <span className="font-bold text-blue-400">
                          reportabuse@uniwave.org
                        </span>
                      </p>
                    </li>
                  </ul>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Terms;
