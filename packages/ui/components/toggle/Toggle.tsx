'use client';

import ToggleOn from '../../assets/icons/toggle/icon_toggle_on.svg';
import ToggleOff from '../../assets/icons/toggle/icon_toggle_off.svg';
import { useState } from 'react';

interface ToggleProps {
  size?: 'lg' | 'md' | 'sm';
  isToggleOn?: boolean;
}

function Toggle({ size = 'lg', isToggleOn = false }: ToggleProps) {
  const [toggle, setToggle] = useState(isToggleOn);

  return (
    <button
      className='p-0 bg-transparent border-none cursor-default focus:outline-none'
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    >
      {toggle ? (
        <ToggleOn
          width={size === 'lg' ? '80' : size === 'md' ? '60' : '40'}
          height={size === 'lg' ? '40' : size === 'md' ? '30' : '21'}
        />
      ) : (
        <ToggleOff
          width={size === 'lg' ? '80' : size === 'md' ? '60' : '40'}
          height={size === 'lg' ? '40' : size === 'md' ? '30' : '21'}
        />
      )}
    </button>
  );
}

export default Toggle;
