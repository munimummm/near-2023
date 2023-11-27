'use client';

interface BranchProps {
  count?: string;
}

const Branch = ({ count }: BranchProps) => {
  return (
    <div className={'w-[14.875rem] h-[5.1875rem] pl-8'}>
      <div className={'w-24 h-[5.1875rem]'}>
        <div className={'mb-2.5'}>
          <span>전국</span>
        </div>
        <div>
          <span className={'font-bold text-5xl text-indigo-900'}>{count}</span>
          <span className={'font-semibold'}>지점</span>
        </div>
      </div>
    </div>
  );
};

export default Branch;
