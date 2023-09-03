'use client';

import { useMemo, useState } from 'react';
import IconCheckbox from '../../assets/icons/checkbox/icon_checkbox_checked.svg';
import IconBox from '../../assets/icons/checkbox/icon_checkbox.svg';

interface CheckboxProps {
  isDisabled?: boolean;
  singleText?: string;
  multipleText?: string;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const getIsDisabledSingleClasses = (isDisabled: boolean) =>
  isDisabled ? 'text-[#C6C6C6]' : 'text-[#333333]';

const getIsDisabledMultipleClasses = (isDisabled: boolean) =>
  isDisabled ? 'text-[#C6C6C6]' : 'text-[#626262]';

const BASE_CLASSES = 'flex items-center gap-4';

function Checkbox({
  isDisabled = false,
  isChecked = false,
  singleText = '',
  multipleText = '',
}: CheckboxProps) {
  const [toggle, setToggle] = useState(isChecked);

  const computedSingleClasses = useMemo(() => {
    const isDisabledClass = getIsDisabledSingleClasses(isDisabled);

    return [isDisabledClass].join(' ');
  }, [isDisabled]);

  const computedMultipleClasses = useMemo(() => {
    const isDisabledClass = getIsDisabledMultipleClasses(isDisabled);

    return [isDisabledClass].join(' ');
  }, [isDisabled]);

  return (
    <div className='flex flex-col gap-4'>
      <div className={`${BASE_CLASSES}`}>
        <button
          className='p-0 bg-transparent border-none cursor-default focus:outline-none disabled:cursor-not-allowed'
          disabled={isDisabled}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? (
            <IconCheckbox fill={isDisabled ? '#C6C6C6' : '#312E81'} />
          ) : (
            <IconBox />
          )}
        </button>
        {singleText ? (
          <span
            className={`text-base font-normal leading-snug ${computedSingleClasses}`}
          >
            {singleText}
          </span>
        ) : null}
      </div>
      <div className={`${BASE_CLASSES} pl-9`}>
        {singleText && multipleText ? (
          <span
            className={`whitespace-pre-wrap text-sm font-normal leading-tight ${computedMultipleClasses}`}
          >
            {multipleText}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Checkbox;
