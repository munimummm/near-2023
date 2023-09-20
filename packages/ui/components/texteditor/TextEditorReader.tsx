import dynamic from 'next/dynamic';

interface QuillReaderProps {
  content: string;
  // onChange: () => void;
}

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function TextEditorReader({ content }: QuillReaderProps) {
  return <QuillNoSSRWrapper value={content} readOnly theme='bubble' />;
}

export default TextEditorReader;
