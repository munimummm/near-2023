'use client';

import { useMemo } from 'react';
import IconTagDelete from '../../assets/icons/tag/icon_tag_delete.svg';

interface TagProps {
  mode?: 'Main' | 'Gray' | 'Transparent' | 'Stroke';
  size?: 'sm' | 'lg';
  label?: string;
  hasDelete?: boolean;
}

const getModeClasses = (mode: string) => {
  switch (mode) {
    case 'Main': {
      return 'bg-[#312E81] text-white border-none';
    }
    case 'Gray': {
      return 'bg-[#E1E1E1] text-[#242424] border-none';
    }
    case 'Transparent': {
      return 'bg-white bg-opacity-70 backdrop-blur-sm text-[#242424] border-none';
    }
    case 'Stroke': {
      return 'bg-white text-[#1E1B4B] border border-[#312E81] hover:border-[#312E81]';
    }
    default: {
      return 'bg-[#312E81] text-white border-none';
    }
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm': {
      return 'px-4 py-2 gap-2 text-xs';
    }
    case 'lg': {
      return 'px-6 py-1.5 gap-3 text-base';
    }
    default: {
      return 'px-6 py-1.5 gap-3';
    }
  }
};

const BASE_CLASSES =
  'flex justify-center items-center rounded-full font-medium tracking-tight cursor-default focus:outline-none';

const Tag = ({
  mode = 'Main',
  size = 'lg',
  label = 'Tag',
  hasDelete = false,
}: TagProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(mode);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [mode, size]);

  return (
    <button className={`${BASE_CLASSES} ${computedClasses}`}>
      {label}
      {hasDelete ? (
        <IconTagDelete
          className='cursor-pointer'
          width={size === 'lg' ? 13 : 9}
          height={size === 'lg' ? 13 : 9}
          fill={
            mode === 'Main'
              ? 'white'
              : mode === 'Stroke'
              ? '#1E1B4B'
              : '#242424'
          }
        />
      ) : null}
    </button>
  );
};

export default Tag;
