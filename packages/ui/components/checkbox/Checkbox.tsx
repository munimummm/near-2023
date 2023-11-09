'use client';

import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface CheckboxCommonProps {
  isDisabled?: boolean;
}

interface CheckboxTextProps extends CheckboxCommonProps {
  label?: ReactNode;
  labelClassName?: string;
}

interface CheckboxSubTextProps extends CheckboxCommonProps {
  multipleLabel?: ReactNode;
  multipleLabelClassName?: string;
}

interface CheckboxProps extends CheckboxCommonProps {
  name: string;
  type?: string;
  value?: string;
  labelType?: 'notext' | 'singletext' | 'multipletext';
  control?: Control;
}

const CheckboxTextStyle =
  'font-normal mobile:text-sm mobile:leading-tight tablet:text-base tablet:leading-normal desktop:text-base desktop:leading-normal';

function CheckboxText({
  label,
  isDisabled,
  labelClassName,
}: CheckboxTextProps) {
  return (
    <span
      className={clsx(
        `${!isDisabled ? 'text-[#333333]' : 'text-[#C6C6C6]'}`,
        CheckboxTextStyle,
        labelClassName,
      )}
    >
      {label}
    </span>
  );
}

const CheckboxSubTextStyle =
  'text-sm mobile:text-xs mobile:leading-none tablet:font-normal tablet:leading-tight desktop:font-normal desktop:leading-tight';

function CheckboxSubText({
  multipleLabel,
  isDisabled,
  multipleLabelClassName,
}: CheckboxSubTextProps) {
  return (
    <span
      className={clsx(
        `${!isDisabled ? 'text-[#333333]' : 'text-[#C6C6C6]'}`,
        CheckboxSubTextStyle,
        multipleLabelClassName,
      )}
    >
      {multipleLabel}
    </span>
  );
}

function CheckBox({
  name,
  type = 'checkbox',
  control,
  value,
  isDisabled,
  labelType = 'notext',
  label,
  multipleLabel,
  ...props
}: CheckboxProps & CheckboxTextProps & CheckboxSubTextProps) {
  const {
    field: { onChange, value: selectedValue },
  } = useController({
    name,
    control,
  });

  const isChecked = selectedValue === value;

  return (
    <div className='flex flex-col mobile:gap-[0.2331rem] tablet:gap-1 desktop:gap-1'>
      <div className='flex items-center mobile:gap-2 tablet:gap-4 desktop:gap-4 '>
        <label
          className={clsx(
            `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          )}
        >
          <input
            type={type}
            className='hidden'
            name={name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={onChange}
          />
          <div
            className={clsx(
              'rounded-sm flex items-center justify-center mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-5 desktop:h-5 ',
              ` ${
                isChecked
                  ? isDisabled
                    ? 'bg-[#C6C6C6]'
                    : 'bg-theme-main'
                  : isDisabled
                  ? 'bg-white border-[0.0625rem] border-[#C6C6C6]'
                  : 'bg-white border-[0.0625rem] border-[#797979]'
              }`,
            )}
          >
            {isChecked ? (
              <div className='mobile:w-[0.5625rem] mobile:h-2 tablet:w-3 tablet:h-[0.625rem] desktop:w-3 desktop:h-[0.625rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 9 9'
                  fill='none'
                >
                  <path
                    d='M0.771484 4.42318L3.30482 7.58984L8.10482 1.58984'
                    stroke='white'
                    stroke-width='1.22027'
                    stroke-linecap='round'
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </label>
        {labelType !== 'notext' ? (
          <CheckboxText
            isDisabled={isDisabled}
            labelClassName={props.labelClassName}
            label={label}
          />
        ) : null}
      </div>
      {labelType === 'multipletext' ? (
        <div className='mobile:pl-6 tablet:pl-9 desktop:pl-9'>
          <CheckboxSubText
            isDisabled={isDisabled}
            multipleLabel={multipleLabel}
            multipleLabelClassName={props.multipleLabelClassName}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CheckBox;
