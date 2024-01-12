'use client';
import { useEffect, useState } from 'react';
import TextEditorWriter from 'ui/components/texteditor/TextEditorWriter';
import { Control, useForm } from '@near/react-hook-form';
import TextInput from 'ui/components/textinput/TextInput';
import { ImageBox } from 'ui/components/imagebox/ImageBox';
import { ButtonXL, RadioTag } from 'ui';
import { Session, createClientComponentClient } from '@near/supabase';
import { useRouter } from 'next/navigation';

interface petData {
  name: string;
}
interface TagProps {
  tag_id: string;
  tag_type: string;
  tag_name: string;
}
interface DiaryTitleProps {
  title: string;
  subTitle: string;
}

interface CareDiaryType {
  subject?: string;
  article?: string;
}
interface TagSectionProps {
  name: string;
  title: string;
  tags: TagProps[];
  control: Control;
}

const DiaryTitle: React.FC<DiaryTitleProps> = ({ title, subTitle }) => (
  <div className='w-full'>
    <div className='mb-8  pl-8 pr-2.5 pt-2.5'>
      <p className='mb-1 text-xs  text-[#242424]'>{title}</p>
      <p className='text-xl font-bold text-[#242424]'>{subTitle}</p>
    </div>
    <hr className='border border-[#E1E1E1]' />
  </div>
);

const TagGroup: React.FC<TagSectionProps> = ({
  title,
  tags,
  control,
  name,
}) => (
  <div className='flex flex-col items-start justify-center gap-4 px-8 py-2 bg-white'>
    <div className='flex items-center gap-2.5 pl-1'>
      <p className='text-lg text-[#545454]'>{title}</p>
    </div>
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <RadioTag
          key={tag.tag_id}
          control={control}
          name={name}
          value={`${tag.tag_id}`}
        >
          {tag.tag_name}
        </RadioTag>
      ))}
    </div>
  </div>
);

function DiaryWritePage({ params }) {
  const router = useRouter();
  const [userSession, setuserSession] = useState<Session | null>();
  const supabase = createClientComponentClient();
  const [characterTags, setCharacterTags] = useState<TagProps[]>([]);
  const [trainingTags, setTrainingTags] = useState<TagProps[]>([]);
  const [moodTags, setMoodTags] = useState<TagProps[]>([]);
  const [petData, setPetData] = useState<petData[]>([]);
  const { control, handleSubmit, watch } = useForm<CareDiaryType>({
    defaultValues: {
      subject: '',
      article: '',
    },
    mode: 'onChange',
  });
  const watchedFields = watch();
  const isFormFilled = watchedFields.subject && watchedFields.article;
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
    router.push('/diary');
  };

  return (
    <div className='relative overflow-hidden bg-white '>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pl-4 pt-6 pb-[9px] mb-12'></div>
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
                placeholder='제목을 입력해주세요.'
              />
            </div>
            <div className='pb-12'>
              <TextEditorWriter name='article' control={control} />
            </div>
            <div className='flex gap-4 my-8 px-9'>
              <ImageBox />
            </div>
          </div>
        </div>
        <section className='flex flex-col gap-8'>
          <TagGroup
            title='성격'
            tags={characterTags}
            control={control}
            name='related_first_tag'
          />
          <TagGroup
            title='훈련 / 건강상태'
            tags={trainingTags}
            control={control}
            name='related_second_tag'
          />
          <TagGroup
            title='기분'
            tags={moodTags}
            control={control}
            name='related_third_tag'
          />
        </section>
        <div className='flex justify-center px-4 py-24'>
          {isFormFilled ? (
            <ButtonXL type='submit'>작성완료</ButtonXL>
          ) : (
            <ButtonXL type='submit' isDisabled>
              작성완료
            </ButtonXL>
          )}
        </div>
      </form>
    </div>
  );
}

export default DiaryWritePage;
