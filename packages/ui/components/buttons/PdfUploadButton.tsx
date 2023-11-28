'use client';

import { useController, Control } from 'react-hook-form';
import { clsx } from '@near/clsx';

interface PdfUploadButtonProps {
  name: string;
  control?: Control;
  multiple?: boolean;
  className?: string;
}

const ButtonBaseStyle =
  'border box-border w-[8.625rem] h-[2.0625rem] rounded-full flex items-center justify-center gap-2 text-[0.8125rem] font-normal leading-normal cursor-pointer';

const ButtonModeStyle =
  'bg-transparent border-theme-main text-theme-main hover:bg-bg-blue1 hover:border-theme-main hover:text-theme-main hover:shadow-none active:bg-bg-blue2 active:border-theme-main active:text-theme-main disabled:bg-transparent disabled:border-text-gray disabled:text-text-gray';

/**
 * @author `송용수`
 *
 * @desc
 * PDF 파일 업로드 버튼 UI 컴포넌트. `react-hook-form` 라이브러리의 `useController`를 사용하여 `name`, `control`을 받아옴.
 *
 * @param name
 * — (`string`)
 * `react-hook-form` 관련 props (필수)
 *
 * @param control
 * — (`Control`)
 * `react-hook-form` 관련 props
 *
 * @param multiple
 * — (`boolean`)
 * 파일 업로드 시 여러 개의 파일을 업로드할 수 있는지 여부
 *
 * @param className
 * — (`string`)
 * 버튼에 적용할 className
 */
function PdfUploadButton({
  name,
  control,
  multiple = false,
  className = '',
}: PdfUploadButtonProps) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <label className={clsx(ButtonBaseStyle, ButtonModeStyle, className)}>
      <input
        type='file'
        className='hidden'
        value={value}
        onChange={onChange}
        multiple={multiple}
      />
      <span className='pl-1.5'>파일 업로드</span>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.83398 9.16667L10.0007 5M10.0007 5L14.1673 9.16667M10.0007 5V15'
          stroke='#312E81'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </label>
  );
}

export default PdfUploadButton;
