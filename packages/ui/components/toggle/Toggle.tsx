import Image from 'next/image';
import ToggleOn from '../../assets/icons/toggle/icon_toggle_on.svg';
import ToggleOff from '../../assets/icons/toggle/icon_toggle_off.svg';

interface ToggleProps {
  isToggleOn: boolean;
  size: 'lg' | 'md' | 'sm';
}

const Toggle = ({ isToggleOn, size }: ToggleProps) => {
  return (
    <Image
      className='cursor-pointer'
      src={isToggleOn ? ToggleOn : ToggleOff}
      width={size === 'lg' ? 80 : size === 'md' ? 56 : 40}
      height={size === 'lg' ? 40 : size === 'md' ? 24 : 16}
      alt='토글 아이콘'
    />
  );
};

export default Toggle;
