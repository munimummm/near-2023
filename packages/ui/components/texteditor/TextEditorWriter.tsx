import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const Writer = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
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
const formats = [
  'header', // header: [1, 2, 3, 4, 5, 6, false]
  'bold',
  'italic',
  'strike',
  'list', // list: 'ordered' and list: 'bullet'
  'align',
];

function TextEditorWriter() {
  return (
    <div className=''>
      <Writer
        className='w-[480px] h-[350px]'
        modules={modules}
        theme='snow'
        formats={formats}
        placeholder={'내용을 입력해주세요'}
      />
    </div>
  );
}

export default TextEditorWriter;
