'use client';

import { ReactNode } from 'react';
import { useController, Control } from 'react-hook-form';
import clsx from 'clsx';

interface RadioTagProps {
  name: string;
  control?: Control;
  value?: string;
  children?: ReactNode;
  hasX?: boolean;
  handleXClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const BaseStyle =
  'flex items-center justify-center cursor-pointer h-8 px-4 gap-2 rounded-full border text-sm font-normal leading-tight';

const ColorStyle = {
  main: 'bg-theme-main border-theme-main text-white',
  gray: 'bg-bg-gray1 border-bg-gray1 text-text-black1',
  stroke: 'bg-transparent border-theme-main text-theme-main',
  translucent:
    'bg-white bg-opacity-70 border-white border-opacity-70 text-text-black1',
};

/**
 * @author `송용수`
 *
 * @desc Tag UI 컴포넌트 (`<input type='radio' />` 버전). `react-hook-form` 라이브러리의 `useController`를 사용하여 `name`, `control`을 받아옴. `문정환`님의 `RadioButton` 컴포넌트의 로직과 동일하게 작성함.
 *
 * @param name
 * — (`string`)
 * `react-hook-form` 관련 props (필수)
 *
 * @param control
 * — (`Control`)
 * `react-hook-form` 관련 props
 *
 * @param value
 * — (`string`)
 * `react-hook-form` 관련 props
 *
 * @param children
 * — (`ReactNode`)
 * 태그 내부에 들어갈 요소 (string, 이미지 등)
 *
 * @param hasX
 * — (`boolean`)
 * 태그 내부에 X 버튼이 들어갈지 여부
 *
 * @param handleXClick
 * — (`React.MouseEventHandler<HTMLButtonElement>`)
 * 작성 시 `(e) => {e.stopPropagation(); ... }` 방식으로 작성해야 함
 *
 * @param className
 * — (`string`)
 * 태그에 적용할 className
 */
const RadioTag = ({
  name,
  control,
  value,
  children,
  hasX = false,
  handleXClick,
  className,
}: RadioTagProps) => {
  const {
    field: { onChange, value: selectedValue },
  } = useController({
    name,
    control,
  });

  const isChecked = selectedValue === value;

  return (
    <label
      className={clsx(
        BaseStyle,
        ColorStyle[isChecked ? 'gray' : 'main'],
        className,
      )}
    >
      <input
        type='radio'
        name={name}
        value={value}
        checked={isChecked}
        className='hidden'
        onChange={onChange}
      />
      {children}
      {hasX ? (
        <button
          className='bg-transparent border-none w-[0.5625rem] h-[0.5625rem] cursor-pointer'
          onClick={(e) => {
            e.stopPropagation();
            handleXClick;
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100%'
            viewBox='0 0 9 9'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.49744 5.29813L7.79324 8.59232L8.50052 7.88539L5.20472 4.59119L8.50074 1.29678L7.79346 0.589844L4.49744 3.88426L1.20142 0.589844L0.494141 1.29678L3.79016 4.59119L0.494359 7.88539L1.20164 8.59232L4.49744 5.29813Z'
              fill={`${!isChecked ? '#fff' : '#242424'}`}
            />
          </svg>
        </button>
      ) : null}
    </label>
  );
};

export default RadioTag;
