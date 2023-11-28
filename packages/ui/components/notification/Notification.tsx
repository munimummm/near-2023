'use client';

interface NotificationProps {
  time?: string;
  number: string;
}

const Notification = ({ time, number }: NotificationProps) => {
  return (
    <div
      className={
        'w-[19.938rem] h-[6.188rem] px-4 pt-2 md:w-[45rem] h-[6.5rem] border-b border-slate-500'
      }
    >
      <div className={'md:flex justify-between'}>
        <div className={''}>
          <div className={'w-[4.375rem] h-[1.5rem] font-bold text-base'}>
            봉사 신청
          </div>
          <div className={'w-[17.938rem] h-[1.5rem] my-1 text-base'}>
            {number}의 봉사 신청이 완료되었습니다.
          </div>
        </div>
        <div className={'md:mt-8'}>
          <div className={'w-[16.063rem] h-[1.5rem] text-gray-400'}>
            {' '}
            봉사 신청 | by 니어팀 | {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
