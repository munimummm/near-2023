'use client';
// import { useController } from 'react-hook-form';
import { ReactQuill } from './ReactQuill';

interface QuillReaderProps {
  content: string;
}

function TextEditorReader({ content }: QuillReaderProps) {
  return <ReactQuill value={content} theme='bubble' readOnly />;
}

export default TextEditorReader;
