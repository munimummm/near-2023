'use client';

interface BodyTextProps {
  content: string;
}

const BodyText = ({ content }: BodyTextProps) => {
  return (
    <div
      className={
        'w-[30rem] h-[10.5rem] px-[1.375rem] text-center md:w-[48rem] md:h-[8.75rem] md:px-20 md:font-medium lg:w-[90rem] lg:h-[7rem] lg:px-40'
      }
    >
      <span>{content}</span>
    </div>
  );
};

export default BodyText;
