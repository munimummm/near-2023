'use client';
import { QuillNoSSRWrapper } from './ReactQuill';

interface QuillReaderProps {
  content: string;
}

function TextEditorReader({ content }: QuillReaderProps) {
  return <QuillNoSSRWrapper value={content} theme='bubble' readOnly />;
}

export default TextEditorReader;
