import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';


function Feedback({ content, author, color, gender }) {
  const config = genConfig({ gender: gender });

  return (
    <>
      <div className="p-4">
        <div
          className="w-full flex-col shadow-md p-3 rounded-3xl h-[250px]"
          style={{
            backgroundColor: `${color}`
          }}>
          <div className="h-16 w-16 bg-white shadow-md rounded-full mb-5 overflow-hidden">
            {/* <img src={Frame.src} alt="icon" className="self-start " /> */}
            <Avatar style={{ width: '4rem', height: '4rem' }} {...config} />
          </div>
          <div className="mx-auto flex gap-2">
            <div className="text-sm flex flex-col gap-4">
              <p className="mb-base">{content}</p>
              <p className="font-bold">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
