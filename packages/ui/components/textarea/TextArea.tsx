'use client';
import { ChangeEvent, useState } from 'react';
// import { FocusEvent } from 'react';

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
  width?: number;
  height?: number;
  setParentExceeding?: (exceeding: boolean) => void;
}

const styles = {
  textareaContainer: 'relative w-full h-full',
  textareaDefault:
    'w-full h-full p-3 pb-8 text-sm text-left resize-none text-text-gray',
  textareaFocused: 'focus:text-black focus:outline-none',
  textareaExceeding: 'focus:outline-text-red',
  counterContainer: 'absolute right-2 bottom-3',
  counterText: 'text-sm text-black',
  exceedingMessageContainer: 'mt-[11px] ml-[11px] ',
  exceedingMessageText: 'text-sm text-text-red',
};

function TextArea({
  placeholder,
  maxLength,
  width = 435,
  height = 259,
  setParentExceeding,
}: TextAreaProps) {
  const [value, setValue] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [isFocused, setFocused] = useState(false);
  const [isExceeding, setExceeding] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length > maxLength) {
      setExceeding(true);
      setParentExceeding?.(true);
      return;
    }
    setExceeding(false);
    setParentExceeding?.(false);
    setValue(inputValue);
    setTextCount(inputValue.length);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={styles.textareaContainer}>
        <textarea
          className={`
        ${styles.textareaDefault} 
        ${isFocused ? styles.textareaFocused : ''} 
        ${isExceeding ? styles.textareaExceeding : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
        {isFocused && (
          <div className={styles.counterContainer}>
            <span
              className={styles.counterText}
            >{`${textCount} / ${maxLength}`}</span>
          </div>
        )}
        {isExceeding && (
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
