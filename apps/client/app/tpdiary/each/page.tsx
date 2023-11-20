import React from 'react';
import { IconText } from 'ui';
import { Icon } from 'ui/components/icon/Icon';
import Tabs from 'ui/components/tabs/Tabs';
import Tag from 'ui/components/tag/Tag';
// import { clsx } from 'clsx';
import { StoryTimeline } from '../../../components/tpdiary/StoryTimeline';

// function DiaryTitleImage({ tags, title, intro }) {
//   return (
//     <div className=' w-full h-[672px]'>
//       <div className='w-[480px] h-[671px] tablet:w-[321px] tablet:h-[449px] bg-slate-500 desktop:w-[480px] desktop:h-[671px]'>
//         <div className='inline-block mt-[34px] ml-[441px] rotate-90 '>
//           <Icon state='default' icon='ic_more' sizes={'sm'} />
//         </div>
//         <div className='flex gap-2 mt-[399px] pl-6 mb-6'>
//           {tags.map((tag, index) => (
//             <Tag key={index} mode='gray'>
//               {tag}
//             </Tag>
//           ))}
//         </div>
//         <div className='text-white pl-7'>
//           <div className='text-3xl font-bold'>{title}의 일기</div>
//           <div className='text-xl font-normal mb-9'>{intro}</div>
//           <div className='flex gap-4 mb-8'>
//             <IconText text='20' icon='ic_heart' sizes={'sm'} />
//             <IconText text='20' icon='ic_heart' sizes={'sm'} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function DiaryTitleImage({ tags, title, intro }) {
//   return (
//     <div className='w-full h-[672px] flex tablet:grid tablet:grid-cols-2 relative'>
//       <div className='absolute tablet:static w-[480px] h-[671px] tablet:w-[321px] tablet:h-[449px] bg-slate-500 desktop:w-[480px] desktop:h-[671px]'></div>
//       <div className='absolute flex'>
//         <div className='absolute  tablet:static top-[34px] left-[441px] rotate-90 '>
//           <Icon state='default' icon='ic_more' sizes={'sm'} />
//         </div>

//         <div className='absolute tablet:static tablet:order-2 flex gap-2 top-[479px] pl-6 '>
//           {tags.map((tag, index) => (
//             <Tag key={index} mode='gray'>
//               {tag}
//             </Tag>
//           ))}
//         </div>

//         <div className='absolute top-[531px]  tablet:static tablet:top-[57px] text-white tablet:text-black pl-7'>
//           <div className='text-3xl font-bold tablet:order-1'>
//             {title}의 일기
//           </div>
//         </div>

//         <div className='text-xl font-normal tablet:order-3'>{intro}</div>

//         <div className='absolute tablet:static top-[620px] flex gap-4 mb-8 pl-7'>
//           <IconText text='20' icon='ic_heart' sizes={'sm'} />
//           <IconText text='20' icon='ic_heart' sizes={'sm'} />
//         </div>
//       </div>
//     </div>
//   );
// }
function DiaryTitleImage({ tags, title, intro }) {
  return (
    <div className='relative w-[480px] tablet:w-[768px] desktop:w-[1440px]'>
      <div className='relative flex desktop:grid tablet:grid tablet:grid-cols-2 desktop:grid-cols-2'>
        <div
          className='absolute tablet:static tablet:ml-10 tablet:mt-10 tablet:rounded-md desktop:row-span-2
       w-[480px] h-[672px] tablet:w-[321px] tablet:h-[449px] bg-slate-500 desktop:w-[480px] desktop:h-[671px]'
        ></div>
        <div className='absolute top-[34px] right-[37px] desktop:hidden tablet:hidden rotate-90 '>
          <Icon state='default' icon='ic_more' sizes={'sm'} />
        </div>

        <div
          className='absolute tablet:static flex flex-col top-[459px]
      tablet:ml-10 tablet:mt-10 tablet:pt-[57px] tablet:gap-[26px] tablet:row-span-2 desktop:row-span-1'
        >
          <div className='flex gap-2 pl-6 mb-6 tablet:order-2'>
            {tags.map((tag, index) => (
              <Tag key={index} mode='gray'>
                {tag}
              </Tag>
            ))}
          </div>
          <div className='flex '>
            <div className='text-3xl font-bold text-white tablet:text-black pl-7 tablet:order-1'>
              {title}의 일기
            </div>
            <div className='hidden justify-center gap-4 mb-8 tablet:flex pl-7 tablet:mr-[120px]  tablet:order-1 desktop:mr-[400px]'>
              <Icon state='default' icon='ic_heart' sizes={'md'} />
              {/* <IconText text='20' icon='ic_heart' sizes={'sm'} /> */}
            </div>
            <div className='order-3 hidden rotate-90 tablet:flex'>
              <Icon state='default' icon='ic_more' sizes={'sm'} />
            </div>
          </div>
          <div className='text-xl font-normal text-white tablet:text-black pl-7 tablet:order-3 mb-9'>
            {intro}
          </div>

          <div className='flex gap-4 mb-8 pl-7 tablet:order-1 tablet:hidden'>
            <IconText text='20' icon='ic_heart' sizes={'sm'} />
            <IconText text='20' icon='ic_heart' sizes={'sm'} />
          </div>
        </div>

        <div className='absolute top-[651px] rounded-t-[20px] bg-white w-full z-10 pt-8 tablet:static tablet:ml-11 desktop:row-span-1'>
          <StoryTimeline name={'이름이'} />
        </div>
      </div>

      <div className='absolute top-[880px] tablet:static desktop:static tablet:mt-32'>
        <CardSection />
      </div>
    </div>
  );
}

function MainSection() {
  return (
    <div>
      <DiaryTitleImage
        intro={'한줄소개가 표시'}
        title={'흰둥이'}
        tags={['8개월', '여', '태그']}
      />
    </div>
  );
}

function CardSection() {
  const DiaryTabs = [
    { label: '최근 등록 순', value: 'latest' },
    { label: '오래된 순', value: 'oldest' },
  ];
  return (
    <div>
      <div className='flex justify-between mt-12 mb-6 w-[480px] tablet:w-[768px] desktop:w-[1440px] tablet:mx-4 desktop:mx-14'>
        <div className='pl-4 text-2xl tablet:text-4xl desktop:text-4xl'>
          일기 모아보기
        </div>
        <Tabs size='sm' tabs={DiaryTabs} />
      </div>
      <div className='h-40'>카드리스트</div>
    </div>
  );
}

function each() {
  return (
    <div className='flex flex-col'>
      <MainSection />
    </div>
  );
}

export default each;
