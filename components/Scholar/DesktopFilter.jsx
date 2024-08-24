'use client';

import * as React from 'react';
import { useState } from 'react';

// import Modal from '@mui/material/Modal';
import { levels, Streams, states } from '../../data/Scholar/filter';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: 600
};

export default function DesktopFilter() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [activeIndex1, setActiveIndex1] = useState(null);
  
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const handleButtonClick1 = (index) => {
    setActiveIndex1(index);
  };
  const handleButtonClick2 = (index) => {
    setActiveIndex2(index);
  };
  const handleButtonClick3 = (index) => {
    setActiveIndex3(index);
  };

  return (
    <div>
      <div className="flex flex-col  ">
        <div className="overflow-y-scroll no-scrollbar h-[420px]">
          <div className="mt-3">
            <p className="font-semibold text-lg">Levels</p>
            <div className="w-full flex gap-3">
              {levels.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2 px-4 border rounded-md ${
                    activeIndex1 === idx
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-gray-600'
                  }`}
                  onClick={() => handleButtonClick1(idx)}>
                  {item.content}
                </div>
              ))}
            </div>
          </div>

          {/* streams */}
          <div className="mt-3">
            <p className="font-semibold text-lg">Streams</p>
            <div className="w-full flex gap-3 flex-wrap">
              {Streams.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`p-2 px-4 border rounded-md ${
                      activeIndex2 === idx
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-600'
                    }`}
                    onClick={() => handleButtonClick2(idx)}>
                    {' '}
                    {item.content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* states */}
          <div className="mt-3">
            <p className="font-semibold text-lg">States</p>
            <div className="w-full flex gap-3 flex-wrap">
              {states.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`p-2 px-4 border rounded-md ${
                      activeIndex3 === idx
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-600'
                    }`}
                    onClick={() => handleButtonClick3(idx)}>
                    {' '}
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-full text-center text-lg  rounded-md font-semibold text-white py-2 bg-green-600 mt-2">
          submit
        </button>
        <button className="text-lg text-blue-500 font-semibold mt-2">clear filter</button>
      </div>
    </div>
  );
}
