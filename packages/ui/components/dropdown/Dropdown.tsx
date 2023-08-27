import Image from 'next/image';
import { useState } from 'react';
import IconDropdown from '../../assets/icons/dropdown/icon_dropdown.svg';

interface DropdownProps {
  defaultText: string;
}

interface DropdownOptionsProps {
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownOptions = ({ options, setValue }: DropdownOptionsProps) => {
  return (
    <>
      {options.map((val, idx) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <li
          key={val + idx}
          className='inline-flex items-start justify-start px-4 py-2 text-base font-normal tracking-tight bg-white border-none grow shrink basis-0 hover:bg-indigo-50'
          onClick={() => setValue(val)}
        >
          {val}
        </li>
      ))}
    </>
  );
};

const Dropdown = ({
  defaultText,
  options,
}: DropdownProps & DropdownOptionsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(defaultText);

  return (
    <>
      <button
        className='flex justify-center items-center gap-1.5 px-4 py-2 bg-white text-neutral-800 text-base font-normal tracking-tight rounded border border-neutral-400 focus:border-solid-indigo-900 disabled:bg-zinc-100 disabled:text-neutral-400 active:border-neutral-400 active:bg-indigo-50'
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {value}
        <Image src={IconDropdown} alt='드롭다운 아이콘' />
      </button>
      {isVisible ? (
        <ul className='flex flex-col items-start gap-0.5 py-1 list-none overflow-y-scroll no-scrollbar'>
          <DropdownOptions options={options} setValue={setValue} />
        </ul>
      ) : null}
    </>
  );
};

export default Dropdown;
