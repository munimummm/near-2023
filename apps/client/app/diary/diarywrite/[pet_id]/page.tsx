'use client';
import { useEffect, useState } from 'react';
import TextEditorWriter from 'ui/components/texteditor/TextEditorWriter';
import { useForm } from 'react-hook-form';
import TextInput from 'ui/components/textinput/TextInput';
// import Breadcrumb from 'ui/components/breadcrumb/Breadcrumb';
import { ImageBox } from 'ui/components/imagebox/ImageBox';
import { ButtonXL, RadioTag } from 'ui';
import { Session, createClientComponentClient } from '@near/supabase';
// import { useRouter } from 'next/navigation';

interface petData {
  name: string;
}
interface TagProps {
  tag_id: string;
  tag_type: string;
  tag_name: string;
}
// interface TagGroupProps extends TagProps {
//   name: string;
// }

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

function DiaryWritePage({ params }) {
  // const router = useRouter();
  const [userSession, setuserSession] = useState<Session | null>();
  const supabase = createClientComponentClient();
  const [characterTags, setCharacterTags] = useState<TagProps[]>([]);
  const [trainingTags, setTrainingTags] = useState<TagProps[]>([]);
  const [moodTags, setMoodTags] = useState<TagProps[]>([]);
  const [petData, setPetData] = useState<petData[]>([]);
  console.log(params);
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

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data) {
          setuserSession(data.session);
        }
      } catch (error) {
        console.error('실패', error);
      }
    };

    fetchSession();

    if (!userSession) {
      // router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTags = async () => {
    const { data: tag_group, error } = await supabase
      .from('tag_group')
      .select('*');

    if (error) {
      console.error(error);
      return;
    }
    console.log(tag_group);
    const characterTags = tag_group.filter(
      (tag) => tag.tag_type === 'care_diary_character',
    );
    const trainingTags = tag_group.filter(
      (tag) => tag.tag_type === 'care_diary_training',
    );
    const moodTags = tag_group.filter(
      (tag) => tag.tag_type === 'care_diary_mood',
    );
    setCharacterTags(characterTags);
    setTrainingTags(trainingTags);
    setMoodTags(moodTags);
  };

  const fetchAnimal = async () => {
    const { data: petData, error } = await supabase
      .from('lost_pet_information')
      .select(`name`)
      .eq('lost_pet_id', params.pet_id);

    if (error) {
      console.error(error);
      return;
    }
    if (petData) {
      setPetData(petData);
      console.log('펫', petData);
    }
  };
  const petName = petData[0]?.name;

  useEffect(() => {
    fetchAnimal();
    fetchTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (formData) => {
    const petProfileData = {
      ...formData,
      // id: userSession?.user.id,
      related_lost_pet_id: params.pet_id,
      id: userSession?.user.id,
    };
    const { error } = await supabase
      .from('care_diary')
      .insert([petProfileData]);
    if (error) {
      console.error('데이터 추가 실패:', error);
    }
    console.log('데이터 추가 성공:', petProfileData);
    // router.push(`/profile`);
  };

  return (
    <div className='relative overflow-hidden bg-white '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pl-4 pt-6 pb-[9px] mb-12'>
          {/* <Breadcrumb  items={['근처소식', '임보일기작성']} /> */}
        </div>
        <div className=''>
          <DiaryTitle
            title={`${petName}의 일기`}
            subTitle='임보일기 작성하기'
          />
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
        </div>
        <section className='flex flex-col gap-8'>
          <div className='flex flex-col items-start justify-center gap-4 px-8 py-2 bg-white'>
            <div className='flex items-center gap-2.5 pl-1'>
              <p className='text-lg text-[#545454]'>성격</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {characterTags.map((tag) => (
                <div key={tag.tag_id}>
                  <RadioTag
                    control={control}
                    name={`related_first_tag`}
                    value={`${tag.tag_id}`}
                  >
                    {tag.tag_name}
                  </RadioTag>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start justify-center gap-4 px-8 py-2 bg-white'>
            <div className='flex items-center gap-2.5 pl-1'>
              <p className='text-lg text-[#545454]'>훈련 / 건강상태</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {trainingTags.map((tag) => (
                <div key={tag.tag_id}>
                  <RadioTag
                    control={control}
                    name={`related_second_tag`}
                    value={`${tag.tag_id}`}
                  >
                    {tag.tag_name}
                  </RadioTag>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start justify-center gap-4 px-8 py-2 bg-white'>
            <div className='flex items-center gap-2.5 pl-1'>
              <p className='text-lg text-[#545454]'>기분</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              {moodTags.map((tag) => (
                <div key={tag.tag_id}>
                  <RadioTag
                    control={control}
                    name={`related_third_tag`}
                    value={`${tag.tag_id}`}
                  >
                    {tag.tag_name}
                  </RadioTag>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='flex justify-center px-4 py-24'>
          <ButtonXL type='submit'>작성완료</ButtonXL>
        </div>
      </form>
    </div>
  );
}

export default DiaryWritePage;
