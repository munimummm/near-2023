'use client';

import { useEffect, useState } from 'react';
import IconDropdown from '../../assets/icons/dropdown/icon_dropdown.svg';
import { useController, UseControllerProps } from 'react-hook-form';
interface DropdownProps {
  defaultText: string;
  isDisabled?: boolean;
}
type FormValues = {
  FirstName: string;
};

interface DropdownOptionsProps {
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownOptions = (props: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <li
        {...field}
        className='inline-flex items-start justify-start w-full px-4 py-2 text-base font-normal tracking-tight bg-white text-[#242424] border-none grow shrink basis-0 hover:bg-indigo-50'
      ></li>
    </>
  );
};

const Dropdown = ({
  defaultText = 'Dropdown',
  options = ['Option A', 'Option B', 'Option C'],
  isDisabled = false,
}: DropdownProps & DropdownOptionsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(defaultText);

  useEffect(() => {}, []);
  return (
    <>
      <button>테스트</button>
      <div className='text-[#242424]'>
        <ul className='w-[184px] bg-white drop-shadow-md last:rounded-b-lg first:rounded-t-lg'>
          <li
            value={'서울 특별시'}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className='py-2 pl-4 pr-[0.875rem] disabled:text-neutral-50 hover:bg-bg-blue1'
          >
            <span>서울 특별시</span>
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className='py-2 pl-4 pr-[0.875rem]'
          >
            <span>서울 특별시</span>
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className='py-2 pl-4 pr-[0.875rem]'
          >
            <span>서울 특별시</span>
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className='py-2 pl-4 pr-[0.875rem]'
          >
            <span>서울 특별시</span>
          </li>
          <li
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className='py-2 pl-4 pr-[0.875rem]'
          >
            <span>서울 특별시</span>
          </li>
        </ul>
      </div>
      {/* <button
        className='flex justify-center items-center gap-1.5 px-4 py-2 bg-white text-neutral-800 text-base font-normal tracking-tight rounded border border-[#A3A3A3] hover:border-[#A3A3A3] focus:border-[#312E81] disabled:bg-zinc-100 disabled:text-neutral-400 disabled:hover:border-[#A3A3A3] active:border-neutral-400 active:bg-indigo-50 focus:outline-none disabled:cursor-not-allowed'
        onClick={() => setIsVisible((prev) => !prev)}
        disabled={isDisabled}
      >
        {value}
        <IconDropdown
          className='w-5 h-5'
          fill={isDisabled ? '#A3A3A3' : '#242424'}
        />
      </button>
      {isVisible ? (
        <ul className='w-full flex flex-col items-start gap-0.5 py-1 list-none overflow-y-scroll no-scrollbar shadow'>
          <DropdownOptions options={options} setValue={setValue} />
        </ul>
      ) : null} */}
    </>
  );
};

export default Dropdown;
