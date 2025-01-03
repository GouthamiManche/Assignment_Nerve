import React from 'react';

const ViewToggle = ({ selectedView, onViewChange }) => {
  const views = ['Bullish', 'Bearish', 'Rangebound', 'Volatile'];
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
      {views.map((view) => (
        <button
          key={view}
          onClick={() => onViewChange(view)}
          className={`flex-1 py-1 px-3 rounded-lg transition-colors ${
            selectedView === view
              ? 'bg-blue-600 text-white'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;