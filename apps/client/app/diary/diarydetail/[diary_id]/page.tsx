'use client';
// import Image from 'next/image';
import { TopData } from '../../../../components/home/dummy';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@near/supabase';
// // import { ImagePreview } from 'ui';
// import { Breadcrumb } from 'ui';
// import { Icon } from 'ui/components/icon/Icon';
import { Tag } from 'ui';
import { TextEditorReader } from 'ui';
import TopCarousel from '../../../../components/home/TopCarousel';
import { dateFormatting } from '../../../../utils/dateFormatting';
interface Props {
  params: {
    diary_id: string;
  };
}

// interface ImagePreviewProps {
//   src: string;
//   alt: string;
// }

// function ImageSection() {
//   return (
//     <div>
//       <div className='mb-12 tablet:px-7 desktop:px-24 '>
//         <div className='flex items-center justify-center w-full'>
//           <div className=' relative  w-[480px] h-[341px] tablet:w-[712px] tablet:h-[466px] desktop:w-[1264px] desktop:h-[600px]'>
//             <Image fill src='/image.jpg' alt='read' />
//           </div>
//         </div>
//         <div className='flex justify-center gap-4 mt-8 px-[0.4375rem]'>
//           {Images.map((image, index) => (
//             <div key={index}>
//               <ImagePreview src={image.src} alt={image.alt} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ImagePreview({ src, alt }: ImagePreviewProps) {
//   return (
//     <div className='relative w-20 h-20 tablet:w-40 tablet:h-40 desktop:w-40 desktop:h-40'>
//       <Image fill src={src} alt={alt} />
//     </div>
//   );
// }

function DiaryDetailPage({ params }: Props) {
  const supabase = createClientComponentClient();
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('care_diary')
      .select(
        `*,related_first_tag_group:related_first_tag(tag_name),
      related_second_tag_group:related_second_tag(tag_name),
      related_third_tag_group:related_third_tag(tag_name)`,
      )
      .eq('care_diary_id', params.diary_id);

    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      const formattedData = data.map((item) => {
        const formattedDate = dateFormatting(item.created_at);
        return { ...item, formattedDate };
      });
      setData(formattedData);
      console.log('tag', data);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full '>
      <div className='pl-4 pt-6 pb-[9px] mb-12'>
        {/* <Breadcrumb items={['근처소식', '임보일기']} /> */}
      </div>
      {data.map((item) => (
        <div key={item.care_diary_id}>
          <div className='mb-12 pt-2.5'>
            <div className='px-8'>
              <p className='text-xs text-[#242424]'>{item.formattedDate}</p>
              <div className='flex items-center justify-between mt-1'>
                <h1 className='text-xl font-bold text-[#242424]'>
                  {item.subject}
                </h1>
                {/* <Icon sizes='sm' icon='ic_heart' state='default' /> */}
              </div>
              <div className='flex gap-4 my-8'>
                <Tag>{item.related_first_tag_group.tag_name}</Tag>
                <Tag>{item.related_second_tag_group.tag_name}</Tag>
                <Tag>{item.related_third_tag_group.tag_name}</Tag>
              </div>
            </div>
            <hr className='border border-[#E1E1E1]' />
          </div>
          <TopCarousel slides={TopData} isNotHome />
          {/* <ImageSection /> */}
          {/* <ImagePreview image={undefined} /> */}
          <div className='px-8'>
            <TextEditorReader content={item.article} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiaryDetailPage;
