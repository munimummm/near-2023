import { useState } from 'react';
// import Link from 'next/link';
// import { useSelectedLayoutSegment } from 'next/navigation';

type Item = {
  label: string;
  value: string;
  path?: string;
};

interface TabsProps {
  items: Item[];
  size?: 'sm' | 'lg';
  children?: React.ReactNode;
}

function Tabs({ children, items, size = 'sm' }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(items[0].value);

  const onSelect = (value: string) => {
    setSelectedTab(value);
  };

  const TabsSize =
    size === 'sm'
      ? 'mobile:h-[2.5rem] mobile:font-semibold mobile:text-base px-4 py-2'
      : 'h-[3rem] font-bold text-xl px-6 py-3';

  const TabsGap = size === 'sm' ? ' mobile:gap-[1.3125rem]' : 'gap-[2rem]';

  return (
    <div className=''>
      <div className={`flex flex-row items-center justify-center ${TabsGap}`}>
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => onSelect(item.value)}
            className={`
            inline-flex items-center justify-center
            ${TabsSize}  
            ${
              selectedTab === item.value
                ? 'text-theme-main_light'
                : 'text-text-gray hover:text-theme-main_light'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Tabs;
