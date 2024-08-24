'use client';
import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import { faq } from '../../data/Home/FAQ';
import Answers from './Answers';

function FAQ() {
  let [quest, setQuest] = useState(Array(5).fill(0));
  let [answer, setAnswer] = useState(faq[0].answer);
  function updateQuest(id, i) {
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
      <div className="h-max w-4/5 shadow-md rounded-xl mx-auto bg-[#F6F9F4] mt-16 lg:mt-28 lg:flex p-4 lg:p-16 gap-2 mb-20">
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
        <div className="flex items-center justify-center">
          <Answers answer={answer} />
        </div>
      </div>
    </>
  );
}

export default FAQ;
