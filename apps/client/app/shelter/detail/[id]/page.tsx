'use client';

import Image from 'next/image';
import { ButtonXL, CardWithLike, Icon } from 'ui';
// import { clsx } from '@near/clsx';
import { DummyShelterVolunteerReview } from '../../../../components/home/dummy';
import ShelterVoluteerCard from '../../../../components/shelter/ShelterVoluteerCard';
// import { MoreLink } from '../../../components/home/MoreLink';
import { DummyNearPets } from '../../../../components/home/dummy';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@near/supabase';
import Link from 'next/link';
import { ShelterProps } from '../../page';
import { useRouter } from 'next/navigation';
interface Props {
  params: {
    id: string;
  };
}

interface ShelterDetailProps {
  related_shelter_id: string;
  shelter_site_url: string;
  shelter_intargram: string;
  shelter_profile: ShelterProps;
}

interface ImagePreviewProps {
  src: string;
  alt: string;
}
const Images = [
  {
    src: '/images/image1.jpg',
    alt: '1',
  },
  {
    src: '/images/image1.jpg',
    alt: '2',
  },
  {
    src: '/images/image1.jpg',
    alt: '3',
  },
];
export const dynamic = 'force-dynamic';

function ImageSection() {
  return (
    <div>
      <div className='mb-12 tablet:px-7 desktop:px-24 '>
        <div className='flex items-center justify-center w-full'>
          <div className=' relative  w-[480px] h-[341px] tablet:w-[662px]  desktop:w-[480px] '>
            <Image fill src='/images/image1.jpg' alt='read' />
          </div>
        </div>
        <div className='flex justify-center gap-4 mt-8 px-[0.4375rem]'>
          {Images.map((image, index) => (
            <div key={index}>
              <ImagePreview src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImagePreview({ src, alt }: ImagePreviewProps) {
  return (
    <div className='relative w-20 h-20 '>
      <Image fill src={src} alt={alt} />
    </div>
  );
}

function ShelterDetailInfo({
  shelterName,
  shelterAddress,
  shelterRace,
  shelterType,
  shelterScale,
  shelterSiteUrl,
  shelterInsta,
}) {
  const router = useRouter();

  return (
    <section>
      <div className='flex flex-col gap-10 px-8 py-2 tablet:px-[74px] '>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>보호소 명</p>
          <p className='font-semibold'>{shelterName}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>보호소 위치</p>
          <p className='font-semibold'>{shelterAddress}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>보호종</p>
          <p className='font-semibold'>{shelterRace}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>보호소 종류</p>
          <p className='font-semibold'>{shelterType}</p>
        </div>
        <div className='flex justify-between text-lg tablet:justify-start tablet:gap-32'>
          <p className='w-32'>시설규모</p>
          <p className='font-semibold'>{shelterScale}</p>
        </div>
        <div className='flex flex-col gap-4 '>
          <ButtonXL mode='outline' onClick={() => router.push(shelterSiteUrl)}>
            홈페이지
          </ButtonXL>
          <ButtonXL mode='outline' onClick={() => router.push(shelterInsta)}>
            Instagram
          </ButtonXL>
        </div>
      </div>
    </section>
  );
}

function MoreLink({ path, title }) {
  return (
    <Link href={path} className='pl-8 pt-2.5 pb-8 flex gap-2 items-center '>
      <h2 className='text-xl font-bold tablet:text-2xl'>{title}</h2>
      <div className='tablet:hidden'>
        <Icon sizes='sm' state='default' icon='ic_chevron_right' />
      </div>

      <div className='hidden pt-[6px] pl-2 tablet:inline-block'>
        <Icon sizes='md' state='default' icon='ic_chevron_right' />
      </div>
    </Link>
  );
}

function ShelterDetailPage({ params }: Props) {
  const dummy = DummyShelterVolunteerReview;
  const [data, setData] = useState(DummyNearPets);
  const [detail, setDetail] = useState<ShelterDetailProps[]>([]);
  const supabase = createClientComponentClient();
  const handleIsLiked = (index: number) => {
    let newData = [...data];
    newData[index].isLiked = !newData[index].isLiked;
    setData(newData);
  };

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('shelter_profile_detail')
      .select(`*, shelter_profile (*)`);
    if (error) {
      console.error('실패: ', error);
    }
    if (data) {
      setDetail(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchData();
    console.log(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col gap-12'>
      <section>
        <div className='pt-2.5 pl-8 pr-4 pb-8 border-b-text-gray border-b flex items-center justify-between'>
          <div className='text-xl font-bold tablet:text-4xl desktop:text-5xl'>
            00유기견 보호소
          </div>
        </div>
      </section>
      <section className='flex flex-col desktop:flex-row'>
        <ImageSection></ImageSection>
        {detail.map((item) => {
          return (
            <ShelterDetailInfo
              key={item.shelter_profile.id}
              shelterName={item.shelter_profile.shelter_name}
              shelterAddress={item.shelter_profile.shelter_address}
              shelterRace={'강아지, 고양이'}
              shelterType={item.shelter_profile.shelter_type}
              shelterScale={item.shelter_profile.shelter_scale}
              shelterSiteUrl={item.shelter_site_url}
              shelterInsta={item.shelter_intargram}
            />
          );
        })}
      </section>
      <section>
        <div>
          <MoreLink path='/' title='니어 관리 동물' />
        </div>
        <ul className='overflow-x-auto grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-7 place-items-center mobile:grid-cols-2 mobile:grid-rows-2 mobile:gap-x-5 mobile:gap-y-7 mobile:place-items-center tablet:grid-cols-4 tablet:grid-rows-1 tablet:gap-x-10 tablet:gap-y-0 tablet:place-items-center tablet:min-w-[78.25rem] desktop:grid-cols-4 desktop:grid-rows-1 desktop:gap-x-10 desktop:gap-y-0 desktop:place-items-center desktop:min-w-[78.25rem]'>
          {data.map((item, index) => {
            return (
              <li key={`home_near_pets_${index}`}>
                <CardWithLike
                  cardNumber={index}
                  petData={item.petData}
                  src={item.src}
                  tags={item.tags}
                  isLiked={item.isLiked}
                  setIsLiked={() => handleIsLiked(index)}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <div className='flex flex-col mb-2 gap-36 desktop:flex-row desktop:gap-48'>
        <section>
          <div>
            <MoreLink path='#' title='봉사모집' />
          </div>
          <div className='flex gap-4 px-8 desktop:gap-12'>
            {dummy.map((item) => (
              <div key={item.id}>
                <ShelterVoluteerCard item={item} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
            <MoreLink path='#' title='봉사후기' />
          </div>
          <div className='flex gap-4 px-8 desktop:gap-12'>
            {dummy.map((item) => (
              <div key={item.id}>
                <ShelterVoluteerCard item={item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShelterDetailPage;
