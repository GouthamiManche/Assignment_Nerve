import React, { useState } from 'react';

const DateDropdown = ({ dates, selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center"
      >
        <span className="text-gray-900">{selectedDate}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg z-10 divide-y divide-gray-100">
          {dates.map((date) => (
            <div
              key={date}
              onClick={() => {
                onDateChange(date);
                setIsOpen(false);
              }}
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



export default DateDropdown;