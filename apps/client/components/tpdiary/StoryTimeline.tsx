'use client';

interface TimelineItemProps {
  year: string;
  date: string;
  position?: string;
}

// function TimelineItem({ year, date, position, title }: TimelineItemProps) {
//   return (
//     <div className={`absolute top-5`} style={{ left: `${position}` }}>
//       <div
//         className={`px-4 py-2 border rounded-lg border-theme-main min-w-max `}
//       >
//         <div className='flex flex-col font-medium text-right text-theme-main_dark'>
//           <span className='text-xl'>{year}</span>
//           <span className='text-sm'>{date}</span>
//         </div>
//         <div className='absolute w-3 h-3 transform -rotate-45 -translate-x-1/2 bg-white border border-r-transparent border-t-transparent border-theme-main -bottom-1.5 left-3/4'></div>
//       </div>
//       {/* <div
//         style={{ top: '112px', right: '2px' }}
//         className='absolute text-xl right-10'
//       >
//         {title}
//       </div> */}
//     </div>
//   );
// }
function TimelineLargeItem({ year, date }: TimelineItemProps) {
  return (
    <div
      className='relative'
      style={{
        position: 'relative',
        marginLeft: '70px',
      }}
    >
      <div
        className={`px-4 py-3 border rounded-lg border-theme-main min-w-max`}
      >
        <div className='flex flex-col font-semibold text-right text-theme-main_light'>
          <span className='text-3xl'>{year}</span>
          <span className='text-base'>{date}</span>
        </div>
        <div
          className='left-[75%]'
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            transform: 'rotate(-45deg) translateX(-50%)',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent transparent #1E1B4B #1E1B4B',
            bottom: '-1.5px',
            // left: '75%',
          }}
        ></div>
      </div>
    </div>
  );
}
function TimelineItem({ year, date, position }: TimelineItemProps) {
  return (
    <div
      style={{
        position: 'relative',
        marginLeft: `${position}`,
        marginTop: '20px',
      }}
    >
      <div
        className={`px-4 py-2 border rounded-lg border-theme-main min-w-max `}
      >
        <div className='flex flex-col font-medium text-right text-theme-main_dark'>
          <span className='text-xl'>{year}</span>
          <span className='text-sm'>{date}</span>
        </div>

        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            transform: 'rotate(-45deg) translateX(-50%)',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'transparent transparent #1E1B4B #1E1B4B',
            bottom: '-1.5px',
            left: '75%',
          }}
        ></div>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div
      style={{
        width: '100%',
        height: '4px',
        backgroundColor: '#F0EFEF',
        borderRadius: '4px',
      }}
    >
      <div
        style={{
          height: '4px',
          backgroundColor: '#B8B5E7',
          borderRadius: '4px',
          width: '80%',
        }}
      ></div>
    </div>
  );
}

export function StoryTimeline({ name }) {
  return (
    <div className=' px-4 w-[480px] tablet:w-[707px] desktop:w-[707px]'>
      <div className='pt-2.5 mb-8 text-xl font-bold '>{name}의 이야기</div>
      <div className='flex mb-5'>
        <TimelineItem year='2020' date='0202' />
        <TimelineItem year='2020' date='0202' position='36px' />
        <TimelineLargeItem year='2020' date='0202' />
      </div>
      <div style={{ marginTop: '18px', marginBottom: '12px' }}>
        <ProgressBar />
      </div>
      <div className='flex'>
        <div className='flex'>
          <div style={{ paddingLeft: '48px' }} className='text-xl'>
            출생
          </div>
          <div style={{ paddingLeft: '48px' }} className='text-xl'>
            니어 등록
          </div>
        </div>
        <div
          style={{ paddingLeft: '88px' }}
          className='text-2xl font-bold text-theme-main_light ml-9'
        >
          임보 시작
        </div>
      </div>
    </div>
  );
}
// export function StoryTimeline({ name }) {
//   return (
//     <div className=' relative px-4 w-[480px]'>
//       <div className='pt-2.5 mb-8 text-xl font-bold '>{name}의 이야기</div>
//       <div className='relative'>
//         <TimelineItem year='2020' date='0202' title='출생' />
//         <TimelineItem
//           year='2020'
//           date='0202'
//           position='160px'
//           title='니어 등록'
//         />
//         <TimelineLargeItem year='2020' date='0202' title='임보시작' />

//         <div className='absolute w-full top-[112px]'>
//           <ProgressBar />
//         </div>
//       </div>
//     </div>
//   );
// }
