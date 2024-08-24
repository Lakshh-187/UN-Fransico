"use client";
import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import Answers from "./Answers";

const faq = [
  {
    "question": "Why do we need social internships, event participation, and membership fees?",
    "answer": "To appreciate and respect the effort put into providing opportunities, benefits, and resources. Many students often take these valuable resources for granted, similar to how they sometimes overlook the efforts of their teachers and parents."
  },
  {
    "question": "How do we get our membership fees refunded?",
    "answer": "Participate in social internships, events, conferences, and other activities to qualify for a refund."
  },
  {
    "question": "Why are these vast resources and benefits provided for free?",
    "answer": "We aim to encourage activities like tree planting, donating old clothes, and participating in innovative global events to make the earth a better place to live."
  },
  {
    "question": "Who donates these resources and who do they belong to?",
    "answer": "Many creators, influencers, and sponsors donate these resources to make this revolution impactful."
  },
  {
    "question": "What is the target of this revolution?",
    "answer": "We plan to assist over 1 million underprivileged people and animals, and aim to plant 5 crore trees."
  },
  {
    "question": "What should we do if we face issues accessing the resources?",
    "answer": "Visit our helpline number, channel, or help desk for assistance."
  },
  {
    "question": "What kind of donations does the foundation accept?",
    "answer": "We do not accept money. Instead, we encourage you to plant trees, donate food and clothes, and help those in need in your surroundings."
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
      <div className="h-max w-4/5 shadow-md  rounded-xl mx-auto bg-[#F6F9F4] mt-16 lg:mt-28 lg:flex p-4 lg:p-16 gap-2 mb-20">
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
