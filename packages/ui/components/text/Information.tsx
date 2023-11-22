'use client';

interface InformationProps {
  shelter: string;
}

const Information = ({ shelter }: InformationProps) => {
  return (
    <div
      className={
        'w-[25.875rem] h-[1.5rem] flex justify-between md:w-[48rem] md:pl-20 md:flex md:flex-col lg:w-[90rem]'
      }
    >
      <div>
        <span>보호소 명</span>
      </div>
      <div>
        <span className={'font-bold'}>{shelter} 보호소</span>
      </div>
    </div>
  );
};

export default Information;
