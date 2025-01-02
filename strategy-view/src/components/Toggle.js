import React from 'react';

const ViewToggle = ({ selectedView, onViewChange }) => {
  const views = ['Bullish', 'Bearish', 'Rangebound', 'Volatile'];

  return (
    <div className="bg-gray-50 p-1 rounded-lg flex gap-1">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`flex-1 py-2 px-4 rounded-xl text-sm transition-colors
            ${selectedView === view
              ? 'bg-[#0B2F9F] text-white'
              : 'text-gray-900 hover:bg-gray-300'}`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;