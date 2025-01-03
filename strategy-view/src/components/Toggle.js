import React from 'react';

const ViewToggle = ({ selectedView, onViewChange }) => {
  const views = ['Bullish', 'Bearish', 'Rangebound', 'Volatile'];
  
  return (
    <div className="w-full overflow-x-auto scrollbar-hide sm:overflow-visible">
      <div className="flex  justify-center whitespace-nowrap min-w-min sm:min-w-0 bg-gray-100 sm:p-1 rounded-lg sm:gap-2">
        {views.map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`
              flex-shrink-1 sm:flex-1
              px-2 sm:px-3
              py-2 sm:py-2
              mx-[12px] sm:mx-1
              text-sm
              transition-colors
              rounded-lg
           
              ${
                selectedView === view
                  ? "bg-[#2a4fe6] text-white"
                  : "text-gray-500 hover:text-gray-700 sm:hover:bg-gray-50"
              }
            `}
          >
            {view}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewToggle;