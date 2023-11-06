'use client';

import {
  useController,
  Control,
  FieldPath,
  RegisterOptions,
  FieldValues,
} from 'react-hook-form';

export type TControl<T extends FieldValues> = {
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

interface TextAreaProps extends TControl<FieldValues> {
  placeholder?: string;
  maxLength?: number;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
}

const styles = {
  textareaContainer: 'relative w-full h-full rounded bg-[#F9F9F9]',
  textareaDefault:
    'w-full h-full p-3 pb-8 text-sm text-left resize-none text-text-gray rounded bg-[#F9F9F9]',
  textareaFocused: 'focus:text-black focus:outline-theme-main',
  textareaExceeding: 'focus:outline-text-red outline-text-red',
  counterContainer: 'absolute right-2 bottom-3',
  counterText: 'text-sm text-black',
  exceedingMessageContainer: 'mt-[11px] ml-[11px] ',
  exceedingMessageText: 'text-sm text-text-red',
};
const WidthSize = {
  sm: 'w-[435px]',
  md: 'w-[720px]',
  lg: 'w-[864px]',
};

function TextArea({
  name,
  control,
  placeholder,
  maxLength = 200,
  size = 'sm',
  isDisabled = false,
}: TextAreaProps) {
  const { field } = useController({
    name,
    control,
    rules: {
      maxLength: {
        value: maxLength,
        message: `글자수는 ${maxLength}자까지 입력 가능합니다.`,
      },
    },
  });
  const maxText = field.value?.length >= maxLength;

  return (
    <div className={`h-[259px] ${WidthSize[size]}`}>
      <div className={styles.textareaContainer}>
        <textarea
          {...field}
          className={`
            ${styles.textareaDefault}
            ${maxText ? styles.textareaExceeding : styles.textareaFocused}
          `}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={isDisabled}
        ></textarea>
        <div className={styles.counterContainer}>
          <span className={styles.counterText}>
            {`${field.value?.length ?? 0} / ${maxLength}`}
          </span>
        </div>
        {maxText && (
          <div className={styles.exceedingMessageContainer}>
            <span className={styles.exceedingMessageText}>
              글자수는 {maxLength}자까지 입력 가능합니다.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextArea;
