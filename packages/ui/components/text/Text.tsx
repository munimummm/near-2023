'use client';

interface TextProps {
  content: string;
}

const Text = ({ content }: TextProps) => {
  return (
    <div
      className={
        'w-[30rem] h-[7.5rem] px-4 text-center md:w-[48rem] md:h-[19.5rem] lg:w-[90rem] lg:h-[21rem]'
      }
    >
      <div className={'md:font-semibold md:text-base'}>{content}</div>
    </div>
  );
};

export default Text;
