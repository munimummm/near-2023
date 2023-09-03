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
  const TabsSize = size === 'sm' ? 'w-[140px] h-10' : 'w-36 h-12';

  const onSelect = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onSelect(tab.value)}
          className={`${TabsSize} px-6 py-4 mr-8 text-xl font-bold ${
            selectedTab === tab.value
              ? 'text-theme-main_light'
              : 'text-text-gray hover:text-theme-main_light'
          }`}
        >
          <span className='flex items-center justify-center h-full'>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
