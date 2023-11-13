'use client';

// import { useRecoilValue, userEmailState } from '@near/store';
import TopCarousel from '../components/home/TopCarousel';
import BottomCarousel from '../components/home/BottomCarousel';
import { Products } from '../components/home/dummy';
export default function Page() {
  // const recoilTest = useRecoilValue(userEmailState);

  return (
    <div className='flex justify-center'>
      <div className='layout_max_width '>
        <TopCarousel slides={Products} />
        <div className='w-full h-[1000px] bg-black'></div>
        <BottomCarousel slides={Products} />
      </div>
    </div>
  );
}
