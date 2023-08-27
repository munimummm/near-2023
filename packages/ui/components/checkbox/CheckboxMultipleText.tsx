import CheckboxSingleText, {
  CheckboxSingleTextProps,
} from './CheckboxSingleText';

interface CheckBoxMultipleTextProps extends CheckboxSingleTextProps {
  checkboxSubText: string;
}

const CheckboxMultipleText = ({
  checkboxTitle,
  checkboxState,
  checkboxSubText,
}: CheckBoxMultipleTextProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <CheckboxSingleText
        checkboxTitle={checkboxTitle}
        checkboxState={checkboxState}
      />
      {/* 체크박스 설명 텍스트 */}
      <span className='w-[284px] ml-[37px] text-sm font-normal leading-tight whitespace-pre-wrap text-zinc-600'>
        {checkboxSubText}
      </span>
    </div>
  );
};

export default CheckboxMultipleText;
