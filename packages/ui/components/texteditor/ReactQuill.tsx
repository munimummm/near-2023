import dynamic from 'next/dynamic';
import ReactQuill, { ReactQuillProps } from 'react-quill';

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef?: React.Ref<ReactQuill>;
}

export const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    return function Quill({ forwardedRef, ...props }: ForwardedQuillComponent) {
      return <QuillComponent ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false },
);

//툴바에 보여지는 시각적 옵션
export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
  ],
  clipboard: {
    //HTML을 붙여 넣을 때 줄 바꿈을 추가 false
    matchVisual: false,
  },
};

//실제 기능이 동작하는 옵션
export const formats = [
  'header', // header: [1, 2, 3, 4, 5, 6, false]
  'bold',
  'italic',
  'strike',
  'list', // list: 'ordered' and list: 'bullet'
  'align',
];
