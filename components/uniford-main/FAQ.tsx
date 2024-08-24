"use client";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import Answers from "./Answers";

const faq = [
  {
    question: "Can we apply in any country?",
    answer:
      "Yes, you can apply to colleges in any country according to the eligibility criteria of that specific college.",
  },
  {
    question:
      "How much time does it take to confirm scholarship status?        ",
    answer:
      "Confirmation of your application typically occurs within a week of submission.        ",
  },
  {
    question: "Do I have to pay for anything?        ",
    answer:
      "No, the Scholar Program is completely free of charge. There are no fees involved.      ",
  },
  {
    question: "What exactly is the Uniford Foundation?        ",
    answer:
      "The Scholar Program uplifts students by providing opportunities like internship , real world projects , increasing awareness, and connecting them with students from prestigious institutions like IITs and Oxford to enhance their skills and passion. ",
  },
  {
    question: "How Do I Apply?        ",
    answer: `Please fill up the inquiry form available on the website. We will get in touch with you to guide you through the process of applying to Uniford Scholar
      Broadly speaking there are 3 steps to the process:
      
      1. Check the Eligibility 
      
      2. Submit your application form 
      
      3. Get invited to the Scholar Process with the admissions committee.
      
      Applying for the Scholar Program is an invite-only process. Owing to the large volume of enquiries please give us a few days to get back to you with the next steps. Thank you for being patient.
      
      `,
  },
];
function FAQ() {
  let [quest, setQuest] = useState(Array(5).fill(0));
  let [answer, setAnswer] = useState(faq[0].answer);
  function updateQuest(id: number, i: number) {
    let newQuest = Array(5).fill(0);
    newQuest[id] = i;
    setQuest(newQuest);
    setAnswer(faq[id].answer);
  }
  useEffect(() => {
    updateQuest(0, 1);
  }, []);
  return (
    <section className="h-max w-4/5 shadow-md  rounded-xl mx-auto bg-[#F6F9F4] lg:mt-28 lg:flex p-4 lg:p-16 gap-2">
      <div className="w-full lg:w-1/2 flex-col">
        <h1 className="text-3xl lg:mb-7  text-[#4d4d4f] font-bold">FAQs</h1>
        {faq.map((item, idx) => {
          return (
            <Questions
              question={item.question}
              active={quest[idx]}
              updateQuest={updateQuest}
              id={idx}
              key={idx + 1}
            />
          );
        })}
      </div>

      <Answers answer={answer} />
    </section>
  );
}

export default FAQ;
