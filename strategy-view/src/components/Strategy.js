import React from 'react';

export const StrategyCard = ({ name, count }) => (
  <div className="w-full p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center">
    <span className="text-gray-900">{name}</span>
    <div className="flex items-center gap-2">
      <span className="w-1 h-1 bg-gray-300 rounded-full" />
      <span className="text-gray-400 text-sm">
        {count} {count === 1 ? 'Strategy' : 'Strategies'}
      </span>
    </div>
  </div>
);



export const StrategyGrid = ({ strategies, selectedDate }) => {
  if (!strategies?.length) {
    return (
      <div className="text-center py-16 text-black">
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
    <div className="mt-4 space-y-2">
      {Object.entries(strategyCount).map(([name, count]) => (
        <StrategyCard key={name} name={name} count={count} />
      ))}
    </div>
  );
};