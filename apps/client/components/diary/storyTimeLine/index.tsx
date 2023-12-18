import { clsx } from 'clsx';

interface TimelineItemProps {
  year: string;
  date: string;
  position?: boolean;
  isLarge?: boolean;
}
interface StoryTimeLineProps {
  name?: string;
}

function TimelineItem({ year, date, position, isLarge }: TimelineItemProps) {
  return (
    <div
      className={clsx(
        `${
          isLarge
            ? ' relative ml-9 tablet:ml-48 desktop:ml-48'
            : 'relative mt-5'
        }`,
        `${position && 'ml-9'}`,
      )}
    >
      <div
        className={clsx(
          'border rounded-lg border-theme-main min-w-max px-4',
          `${isLarge ? 'py-3' : 'py-2'}`,
        )}
      >
        <div
          className={clsx(
            'flex flex-col text-right',
            `${
              isLarge
                ? ' font-semibold text-theme-main_light'
                : ' font-medium  text-theme-main_dark'
            }`,
          )}
        >
          <span className={clsx(`${isLarge ? 'text-3xl' : 'text-xl'}`)}>
            {year}
          </span>
          <span className={clsx(`${isLarge ? 'text-base' : 'text-sm'}`)}>
            {date}
          </span>
        </div>
        <div className='absolute w-2.5 h-2.5 transform -rotate-45 -translate-x-1/2 bg-white border border-r-transparent border-t-transparent border-theme-main -bottom-1 left-[75%]'></div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className='w-full h-1 bg-[#F0EFEF] rounded'>
      <div className='w-[70%] h-1 bg-[#B8B5E7] rounded'></div>
    </div>
  );
}

function StoryTimeline({ name }: StoryTimeLineProps) {
  return (
    <div className=' px-4 w-[480px] tablet:w-[707px] desktop:w-[707px]'>
      <div className='pt-2.5 mb-8 text-xl font-bold '>{name}의 이야기</div>
      <div className='flex mb-5'>
        <TimelineItem year='2020' date='0202' />
        <TimelineItem year='2020' date='0202' position />
        <TimelineItem year='2020' date='0202' isLarge />
      </div>
      <div className='mt-[18px] mb-[12px]'>
        <ProgressBar />
      </div>
      <div className='flex'>
        <div className='flex'>
          <div className='text-xl pl-[48px]'>구조 날짜</div>
          <div className='text-xl pl-[48px]'>니어 등록</div>
        </div>
        <div className='text-2xl font-bold text-theme-main_light ml-9 pl-[38px] tablet:pl-[188px] '>
          임보 시작
        </div>
      </div>
    </div>
  );
}
export default StoryTimeline;
