import Image from 'next/image';
import React from 'react';
// import { ImagePreview } from 'ui';
import Breadcrumb from 'ui/components/breadcrumb/Breadcrumb';
import { Icon } from 'ui/components/icon/Icon';
import { Tag } from 'ui';
import TextEditorReader from 'ui/components/texteditor/TextEditorReader';

interface ImagePreviewProps {
  src: string;
  alt: string;
}
const Images = [
  {
    src: '/image.jpg',
    alt: '1',
  },
  {
    src: '/image.jpg',
    alt: '2',
  },
  {
    src: '/image.jpg',
    alt: '3',
  },
  {
    src: '/image.jpg',
    alt: '4',
  },
];

function Header({ date, title, tags }) {
  return (
    <div className='mb-12 pt-2.5'>
      <div className='px-8'>
        <p className='text-xs text-[#242424]'>{date}</p>
        <div className='flex items-center justify-between mt-1'>
          <h1 className='text-xl font-bold text-[#242424]'>{title}</h1>
          <Icon sizes='sm' icon='ic_heart' state='default' />
        </div>
        <div className='flex gap-4 my-8'>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
      <hr className='border border-[#E1E1E1]' />
    </div>
  );
}
function ImageSection() {
  return (
    <div>
      <div className='mb-12 tablet:px-7 desktop:px-24 '>
        <div className='flex items-center justify-center w-full'>
          <div className=' relative  w-[480px] h-[341px] tablet:w-[712px] tablet:h-[466px] desktop:w-[1264px] desktop:h-[600px]'>
            <Image fill src='/image.jpg' alt='read' />
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
    <div className='relative w-20 h-20 tablet:w-40 tablet:h-40 desktop:w-40 desktop:h-40'>
      <Image fill src={src} alt={alt} />
    </div>
  );
}

function DiaryHomePage() {
  return (
    <div className='w-full '>
      <div className='pl-4 pt-6 pb-[9px] mb-12'>
        <Breadcrumb items={['근처소식', '임보일기']} />
      </div>
      <Header
        date='2023.08 기준'
        title='따뜻한 안식처를 만나다'
        tags={['태그1', '태그2', '태그3']}
      />
      <ImageSection />
      {/* <ImagePreview image={undefined} /> */}
      <div className='px-8'>
        <TextEditorReader
          content={
            '이 작은 친구는 조금씩 안정을 찾아가고 있습니다. 따뜻한 이불 속에서 편안한 잠을 청하며, 천천히 건강한 상태로 돌아가기 위한 에너지를 모아가고 있습니다. 제 손길에 익숙해져가는 것 같아 기쁩니다. 얼마나 그동안 힘들었을까 생각하면 저는 흰둥이에게 더 잘해주고 싶은 마음 뿐입니다. 이 추운 겨울을 따뜻하게 보낼 수 있게 해줄 수 있음에 감사할 따름이에요. 내일은 고구마를 간식으로 줘볼까 생각중입니다. 맛있는 간식으로 흰동이와 어서 빨리 조금이라도 더 친해지고 싶어서요. 흰둥아 우리 빨리 친해지자!! (해시태그) 귀여움, 기특해요'
          }
        />
      </div>
    </div>
  );
}

export default DiaryHomePage;
