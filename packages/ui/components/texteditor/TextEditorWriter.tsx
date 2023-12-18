'use client';

import 'react-quill/dist/quill.snow.css';
import { useController, UseControllerProps } from 'react-hook-form';
import { QuillNoSSRWrapper, modules, formats } from './ReactQuill';
import { useRef } from 'react';

interface QuillEditorProps extends UseControllerProps {
  placeholder?: string;
}

function TextEditorWriter({ placeholder, ...props }: QuillEditorProps) {
  const { field } = useController(props);
  const quill = useRef(null);
  return (
    <QuillNoSSRWrapper
      // {...field}
      forwardedRef={quill}
      className='w-full h-[37rem] desktop:h-[16.1875rem] tablet:h-[16.1875rem]'
      modules={modules}
      theme='snow'
      formats={formats}
      value={field.value}
      onChange={field.onChange}
      placeholder={placeholder}
    />
  );
}

export default TextEditorWriter;
