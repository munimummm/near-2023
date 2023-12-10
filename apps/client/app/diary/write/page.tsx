'use client';
// import { useEffect, useState } from 'react';
import TextEditorWriter from 'ui/components/texteditor/TextEditorWriter';
import { useForm } from 'react-hook-form';
import TextInput from 'ui/components/textinput/TextInput';
import Breadcrumb from 'ui/components/breadcrumb/Breadcrumb';
import ImageBox from 'ui/components/imagebox/ImageBox';
import { RadioTag } from 'ui';
import { createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';

interface CareDiaryType {
  subject?: string;
  article?: string;
}

const DiaryTitle = ({ title, subTitle }) => (
  <div className='w-full'>
    <div className='mb-8  pl-8 pr-2.5 pt-2.5'>
      <p className='mb-1 text-xs  text-[#242424]'>{title}</p>
      <p className='text-xl font-bold text-[#242424]'>{subTitle}</p>
    </div>
    <hr className='border border-[#E1E1E1]' />
  </div>
);

const TagSection = ({ title, tags }) => (
  <div className='flex flex-col items-start justify-center gap-4 px-8 py-2 bg-white'>
    <div className='flex items-center  gap-2.5 pl-1'>
      <p className='text-lg text-[#545454]'>{title}</p>
    </div>
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag, index) => (
        <div key={index}>
          <RadioTag name=''>{tag}</RadioTag>
        </div>
      ))}
    </div>
  </div>
);
// const MainContent = () => {
//   const { control } = useForm();
//   return (
//     <div className=''>
//       <DiaryTitle title='흰둥이의 일기' subTitle='임보일기 작성하기' />
//       <form>
//         <div className='px-6 pt-12'>
//           <div className='pb-8 '>
//             <TextInput
//               className='h-12'
//               name='subject'
//               control={control}
//               placeholder='제목을 입력해 주세요.'
//             />
//           </div>
//           <div className='pb-12'>
//             <TextEditorWriter name='article' control={control} />
//           </div>
//           <div className='flex gap-4 my-8 px-9'>
//             <ImageBox />
//           </div>
//           {/* 이미지 부분 수정 */}
//         </div>
//       </form>
//     </div>
//   );
// };

function DiaryWritePage() {
  const router = useRouter();
  // const [userSession, setuserSession] = useState<Session | null>();
  const supabase = createClientComponentClient();

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<CareDiaryType>({
    defaultValues: {
      subject: '',
      article: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    const petProfileData = {
      ...formData,
      // id: userSession?.user.id,
    };
    const { error } = await supabase
      .from('care_diary')
      .insert([petProfileData]);
    if (error) {
      console.error('데이터 추가 실패:', error);
    }
    console.log('데이터 추가 성공:', petProfileData);
    router.push(`/profile`);
  };

  return (
    <div className='relative overflow-hidden bg-white '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pl-4 pt-6 pb-[9px] mb-12'>
          <Breadcrumb items={['근처소식', '임보일기작성']} />
        </div>
        <div className=''>
          <DiaryTitle title='흰둥이의 일기' subTitle='임보일기 작성하기' />
          <form>
            <div className='px-6 pt-12'>
              <div className='pb-8 '>
                <TextInput
                  className='h-12'
                  name='subject'
                  control={control}
                  placeholder='제목을 입력해 주세요.'
                />
              </div>
              <div className='pb-12'>
                <TextEditorWriter name='article' control={control} />
              </div>
              <div className='flex gap-4 my-8 px-9'>
                <ImageBox />
              </div>
              {/* 이미지 부분 수정 */}
            </div>
          </form>
        </div>
        <TagSection
          title='성격'
          tags={[
            '순해요',
            '밝아요',
            '겁이 많아요',
            '장난꾸러기',
            '똑똑이',
            '애교쟁이',
            '귀여움',
          ]}
        />
        <TagSection
          title='훈련 / 건강상태'
          tags={[
            '배변 훈련 완료',
            '켄넬 훈련 완료',
            '산책 훈련 완료',
            '접종 완료',
          ]}
        />
        <TagSection
          title='기분'
          tags={[
            '귀여워요',
            '예뻐요',
            '감동이에요',
            '다행이에요',
            '기특해요',
            '뿌듯해요',
            '칭찬해요',
          ]}
        />
      </form>
    </div>
  );
}

export default DiaryWritePage;
