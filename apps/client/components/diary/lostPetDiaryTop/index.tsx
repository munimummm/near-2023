'use client';
import { Icon } from 'ui/components/icon/Icon';
import StoryTimeline from '../storyTimeLine';
import { createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { IconText, Tag } from 'ui';
// import { Tabs } from 'ui';
// import { useRouter } from 'next/navigation';
interface Props {
  params: {
    pet_id: string;
  };
}

interface PetData {
  admission_date?: string;
  created_at?: string;
  foster: boolean;
  gender: string;
  lost_pet_id: number;
  name?: string;
  race: string;
  race_detail: string;
  recue_date?: string;
  tag?: string[];
  rescue_spot: string;
  shelter_id: string;
  size?: string | null;
  state_of_health: string;
  comment?: string;
}

function TopImage() {
  return (
    <div
      className='absolute tablet:static tablet:ml-10 tablet:mt-10 tablet:rounded-md desktop:row-span-2
w-[480px] h-[672px] tablet:w-[321px] tablet:h-[449px] bg-slate-500 desktop:w-[480px] desktop:h-[671px]'
    ></div>
  );
}

function LostPetDiaryTop({ params }: Props) {
  const [petData, setpetData] = useState<PetData[]>([]);
  // const router = useRouter();
  const supabase = createClientComponentClient();
  const fetchAnimal = async () => {
    const { data: petData, error } = await supabase
      .from('lost_pet_information')
      .select(`*`)
      .eq('lost_pet_id', params.pet_id);

    if (error) {
      console.error(error);
      return;
    }
    if (petData) {
      setpetData(petData);
      console.log('펫', petData);
    }
  };

  useEffect(() => {
    fetchAnimal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {petData.map((item, index) => (
        <div
          key={index}
          className='relative grid tablet:grid tablet:grid-cols-2 desktop:grid-cols-2'
        >
          <TopImage />
          {/* <div className='absolute top-[34px] right-[37px] desktop:hidden tablet:hidden rotate-90 '>
            <Icon state='default' icon='ic_more' sizes={'sm'} />
          </div> */}

          <div
            className='absolute tablet:static flex flex-col top-[459px]
tablet:ml-10 tablet:mt-10 tablet:pt-[57px] tablet:gap-[26px] tablet:row-span-2 desktop:row-span-1'
          >
            <div className='flex gap-2 pl-6 mb-6 tablet:order-2'>
              {item.tag?.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <Tag mode='gray'>{item}</Tag>
                </div>
              ))}
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-3xl font-bold text-white tablet:text-black pl-7 tablet:order-1'>
                {item.name}의 일기
              </div>
              {/* <div className='hidden justify-center gap-4 tablet:flex pl-7  tablet:order-1 desktop:mr-[400px]'>
                <Icon state='default' icon='ic_heart' sizes={'md'} />
                <IconText text='20' icon='ic_heart' sizes={'sm'} />
              </div> */}
              <div className='order-3 hidden rotate-90 tablet:flex'>
                <Icon state='default' icon='ic_more' sizes={'sm'} />
              </div>
            </div>
            <div className='text-xl font-normal text-white tablet:text-black pl-7 tablet:order-3 mb-9'>
              {item.comment}
            </div>

            <div className='flex gap-4 mb-8 pl-7 tablet:order-1 tablet:hidden'>
              <IconText text='20' icon='ic_heart' sizes={'sm'} />
              <IconText text='20' icon='ic_heart' sizes={'sm'} />
            </div>
          </div>

          <div className='absolute top-[651px] rounded-t-[20px] bg-white w-full z-10 pt-8 tablet:static tablet:ml-11 desktop:row-span-1'>
            <StoryTimeline name={item.name} />
          </div>
        </div>
      ))}
    </>
  );
}

export default LostPetDiaryTop;
