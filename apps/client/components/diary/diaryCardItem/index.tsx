import Image from 'next/image';

interface CardItemProps {
  title: string;
  date?: string;
  onClick: () => void;
}

function CardItem({ title, date, onClick }: CardItemProps) {
  return (
    <button
      onClick={onClick}
      className='flex flex-col w-[13.9375rem] h-[17.125rem] shadow-md rounded-lg desktop:w-[26.25rem] desktop:h-[28.5rem] tablet:w-[22.5rem] tablet:h-[26.5rem] rounded-t-lg cursor-pointer '
    >
      <div className='relative w-full h-10.25rem tablet:h-[16.5rem] desktop:h-[19.25rem] rounded-t-lg'>
        <Image
          fill
          src='/images/dog.png'
          className='rounded-t-lg'
          alt={title}
        ></Image>
      </div>
      <div className='flex flex-col justify-start px-4 py-4 tablet:px-6 desktop:py-8 '>
        <div className='flex justify-start text-lg font-semibold tablet:text-2xl desktop:text-3xl'>
          {title}
        </div>
        <span className='flex justify-start'>{date}</span>
      </div>
    </button>
  );
}
export default CardItem;
