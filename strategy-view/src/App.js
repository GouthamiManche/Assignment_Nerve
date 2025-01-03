import React, { useState, useEffect } from 'react';
import ViewToggle from './components/Toggle';
import DateDropdown from './components/DateDropdown';
import StrategyGrid from './components/Strategy';
const mockStrategyData = [
  {
    View: 'Bullish',
    Value: {
      '24-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Bull Call Spread'],
      '02-May-2024': ['Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 'Long Call', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 'Strategy2', 'Strategy1', 'Strategy2', 'Bull Call Spread'],
      '09-May-2024': ['Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 'Strategy Put']
    }
  },
  {
    View: 'Bearish',
    Value: {
      '24-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread'],
      '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
      '21-Jun-2024': ['Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 'Long Put']
    }
  },
  {
    View: 'RangeBound',
    Value: {
      '24-Apr-2024': ['Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy1', 'Strategy1', 'SpreadStrategy', 'Short Straddle'],
      '02-May-2024': ['Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Short Straddle'],
      '21-Jun-2024': ['Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 'Iron Condor']
    }
  },
  {
    View: 'Volatile',
    Value: {
      '02-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy1', 'Strategy1', 'Spread-Strategy', 'Long Straddle'],
      '09-May-2024': ['Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy2', 'Strategy1', 'Strategy2', 'Long Straddle'],
      '31-May-2024': ['Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 'Long Straddle']
    }
  }
];

const App = () => {
  const dates  = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
  const [selectedView, setSelectedView] = useState('Bullish');
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    const selectedViewData = mockStrategyData.find(item => item.View === selectedView);
    const strategies = selectedViewData?.Value[selectedDate] || [];
    setStrategies(strategies);
  }, [selectedView, selectedDate]);

  return (
    <div className=" min-h-screen">
    <div className="max-w-xl mx-auto p-4">
      <ViewToggle selectedView={selectedView} onViewChange={setSelectedView} />
      <DateDropdown
        dates={dates}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
      <StrategyGrid
        strategies={strategies}
        selectedDate={selectedDate}
        isDropdownOpen={isDropdownOpen}
        dropdownLength={dates.length}
      />
    </div>
  </div>
  );
};

export default App;