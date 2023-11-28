'use client';

import { useController, Control } from 'react-hook-form';
import { clsx } from '@near/clsx';
import { ReactNode } from 'react';

interface ToggleCommonProps {
  className?: string;
  children?: ReactNode;
}

interface ToggleProps {
  name: string;
  type?: string;
  control?: Control;
}

function ToggleBackground({ className, children }: ToggleCommonProps) {
  return (
    <label
      className={clsx(
        'flex items-center mobile:w-10 mobile:h-[1.3125rem] tablet:w-[3.75rem] tablet:h-[1.875rem] desktop:w-20 desktop:h-10 p-0.5 rounded-full cursor-pointer',
        className,
      )}
    >
      {children}
    </label>
  );
}

function ToggleBall() {
  return (
    <div className='bg-white rounded-full mobile:w-[1.0625rem] mobile:h-[1.0625rem] tablet:w-[1.625rem] tablet:h-[1.625rem] desktop:w-9 desktop:h-9' />
  );
}

/**
 * @author `송용수`
 *
 * @desc Toggle UI 컴포넌트. `react-hook-form` 라이브러리의 `useController`를 사용하여 `name`, `control`을 받아옴.
 *
 * @param name
 * — (`string`)
 * `react-hook-form` 관련 props (필수)
 *
 * @param type
 * — (`string`)
 * `input` 태그의 `type` 속성 값. 기본값은 `'checkbox'`
 *
 * @param control
 * — (`Control`)
 * `react-hook-form` 관련 props
 */
function Toggle({ name, type = 'checkbox', control }: ToggleProps) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className='flex items-center justify-center'>
      <ToggleBackground
        className={`${
          !!field.value
            ? 'bg-theme-main justify-end'
            : 'bg-[#C6C6C6] justify-start'
        }`}
      >
        <input
          type={type}
          className='hidden'
          name={field.name}
          value={field.value}
          checked={!!field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        <ToggleBall />
      </ToggleBackground>
    </div>
  );
}

export default Toggle;
