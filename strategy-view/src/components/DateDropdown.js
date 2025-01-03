import React from 'react';

const DateDropdown = ({ dates, selectedDate, onDateChange, setIsOpen, isOpen }) => {
  return (
    <div className="relative mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 bg-white rounded-xl hover:bg-gray-50 transition-colors flex justify-between items-center border border-gray-200"
      >
        <span className="text-gray-900 font-bold">{selectedDate}</span>
        <svg
          className={`w-4 h-4 text-[#2a4fe6] transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-[95%] align-center left-1/2 transform -translate-x-1/2 rounded-lg mt-2 ">
          {dates.map((date, index) => (
            <React.Fragment key={date}>
              <div
                onClick={() => {
                  onDateChange(date);
                  setIsOpen(false);
                }}
                className="p-2 hover:bg-gray-50 font-bold rounded-lg cursor-pointer border border-gray-200 "
              >
                {date}
              </div>
              {index < dates.length - 1 && <div className="h-2" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
