import dynamic from 'next/dynamic';

export const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  // loading: () => <p>Loading ...</p>,
});

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
