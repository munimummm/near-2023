'use client';

// import { useRecoilValue, userEmailState } from '@near/store';
import TopCarousel from '../components/home/TopCarousel';
import BottomCarousel from '../components/home/BottomCarousel';
import { TopData } from '../components/home/dummy';
import { BottomData } from '../components/home/dummy';
export default function Page() {
  // const recoilTest = useRecoilValue(userEmailState);

  return (
    <div className='flex justify-center'>
      <div className='layout_max_width '>
        <TopCarousel slides={TopData} />
        <div className='w-full h-[500px] bg-black'></div>
        <BottomCarousel slides={BottomData} />
      </div>
    </div>
  );
}
