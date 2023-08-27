import React from 'react';

interface TabProps {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: TabProps[];
  selected: string;
  onSelect: (value: string) => void;
}

function Tabs({ tabs, selected, onSelect }: TabsProps) {
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onSelect(tab.value)}
          className={`w-36 h-12 px-6 py-4 gap-2.5 text-xl font-bold ${
            selected === tab.value
              ? 'text-theme-main_light'
              : 'text-text-gray hover:text-theme-main_light'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
