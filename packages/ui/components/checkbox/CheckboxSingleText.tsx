import Image from 'next/image';
import CheckboxEnabled from '../../assets/icons/checkbox/icon_checkbox_enabled.svg';
import CheckboxDisabled from '../../assets/icons/checkbox/icon_checkbox_disabled.svg';
import CheckboxSelected from '../../assets/icons/checkbox/icon_checkbox_selected.svg';

export interface CheckboxSingleTextProps {
  checkboxTitle: string;
  checkboxState: 'enabled' | 'selected' | 'disabled';
}

const CheckboxSingleText = ({
  checkboxTitle,
  checkboxState,
}: CheckboxSingleTextProps) => {
  return (
    <div className='inline-flex items-center justify-center w-24 h-5'>
      <button
        className='inline-flex items-center justify-start gap-4 outline-none'
        disabled={checkboxState === 'disabled'}
      >
        {/* 체크박스 이미지 */}
        <Image
          src={
            checkboxState === 'disabled'
              ? CheckboxDisabled
              : checkboxState === 'selected'
              ? CheckboxSelected
              : CheckboxEnabled
          }
          alt='체크박스 아이콘'
        />
        {/* 체크박스 타이틀 */}
        <span className='text-base font-normal leading-snug text-zinc-800 disabled:text-stone-300'>
          {checkboxTitle}
        </span>
      </button>
    </div>
  );
};

export default CheckboxSingleText;
