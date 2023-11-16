'use client';
import { useState } from 'react';

interface TabProps {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: TabProps[];
  size?: 'sm' | 'lg';
}

function Tabs({ tabs, size = 'sm' }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const onSelect = (value: string) => {
    setSelectedTab(value);
  };

  const TabsSize =
    size === 'sm'
      ? 'mobile:h-[2.5rem] mobile:font-semibold mobile:text-base px-4 py-2'
      : 'h-[3rem] font-bold text-xl px-6 py-3';

  const TabsGap = size === 'sm' ? ' mobile:gap-[1.3125rem]' : 'gap-[2rem]';

  return (
    <div className={`flex flex-row ${TabsGap}`}>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onSelect(tab.value)}
          className={`
            inline-flex items-center justify-center
            ${TabsSize}  
            ${
              selectedTab === tab.value
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
