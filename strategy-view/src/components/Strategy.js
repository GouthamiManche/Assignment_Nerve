import React from 'react';

const StrategyCard = ({ name, count }) => (
  <div className="w-full mt-6 p-4 bg-white rounded-lg hover:bg-[#EFF3EA] transition-colors flex justify-between items-center border border-gray-200 shadow-xs">
    <span className="text-gray-900 font-semibold">{name}</span>
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-gray-300 rounded-full"/>
      <span className="text-gray-400 text-sm">
        {count} {count === 1 ? 'Strategy' : 'Strategies'}
      </span>
    </div>
  </div>
);

const StrategyGrid = ({ strategies, selectedDate, isDropdownOpen, dropdownLength }) => {
  const getMarginTop = () => {
    if (!isDropdownOpen) return 'mt-2';
    // Base height per item (64px = 16px * 4 for p-4)
    const itemHeight = 64;
    const baseOffset = 8;
    const totalHeight = (itemHeight * dropdownLength) + baseOffset;
    return `mt-[${totalHeight}px]`;
  };

  if (!strategies?.length) {
    return (
      <div 
        style={{
          marginTop: isDropdownOpen ? `${(dropdownLength * 64) + 8}px` : '16px',
          transition: 'margin-top 300ms ease-in-out'
        }}
        className="text-center py-12 text-gray-600"
      >
        There are no strategies for <br />
        <span className="font-bold text-lg">{selectedDate}</span>
      </div>
    );
  }

  const strategyCount = strategies.reduce((acc, strategy) => {
    acc[strategy] = (acc[strategy] || 0) + 1;
    return acc;
  }, {});

  return (
    <div
      style={{
        marginTop: isDropdownOpen ? `${(dropdownLength * 50) + 8}px` : '16px',
        transition: 'margin-top 300ms ease-in-out'
      }}
      className="space-y-2"
    >
      {Object.entries(strategyCount).map(([name, count]) => (
        <StrategyCard key={name} name={name} count={count} />
      ))}
    </div>
  );
};

export default StrategyGrid;