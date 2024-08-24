"use client";
import React, { useEffect, useState } from "react";
import Questions from "../Home/Questions";
import Answers from "../Home/Answers";

const faq = [
  {
    "question": "Why do I have to pay a membership fee?",
    "answer": "We charge a membership fee to ensure that students value and utilize the resources provided. In the past, free memberships often led to resources being taken for granted and underutilized."
  },
  {
    "question": "Is the membership fee refundable?",
    "answer": "Yes, the membership fee is fully refundable. By participating in our social internships, events, and conferences, you can earn back your fee."
  },
  {
    "question": "What benefits do I get with the membership?",
    "answer": "As a member, you gain access to a wide range of educational and career resources, premium courses, internships, events, and conferences."
  },
  {
    "question": "How do I earn back my membership fee?",
    "answer": "You can earn back your membership fee by actively participating in social internships, events, and conferences organized by us."
  },
  {
    "question": "Why does UN Francisco provide these resources and opportunities at no cost?",
    "answer": "UN Francisco believes in empowering the next generation of leaders and innovators and we have target to achive a huge tree plantation , poor people devlopment through our members."
  },
  {
    "question": "Can we get certification for attending events, social internships, and other opportunities?",
    "answer": "Yes, participants receive certifications for attending events, completing social internships, and engaging in other opportunities."
  },
  {
    "question": "How do your partnered organizations and companies help us?",
    "answer": "Our partnered organizations and companies provide valuable resources, mentorship, and networking opportunities. They offer internships, workshops, and events that give you real-world experience and industry insights."
  }
]
  ;
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
    <>
      <div className="h-max w-4/5 shadow-md  rounded-xl mx-auto bg-[#F6F9F4] mt-12 lg:mt-28 lg:flex p-4 lg:p-16 gap-2 mb-20">
        <div className="w-full lg:w-1/2 flex-col">
          <h1 className="text-3xl lg:m-2">FAQs</h1>
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
      </div>
    </>
  );
}

export default FAQ;
