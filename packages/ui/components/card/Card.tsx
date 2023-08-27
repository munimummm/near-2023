import Image from 'next/image';
import IconStar from '../../assets/icons/card/icon_card_star.svg';
import IconStarSelected from '../../assets/icons/card/icon_card_star_selected.svg';
import IconArrow from '../../assets/icons/card/icon_card_arrow.svg';
import Tag from '../tag/Tag';

type CardType = {
  [key: string]: string;
};

interface CardProps {
  size: 'lg' | 'sm';
  petName: string;
  petProfileUrl: string;
  petThumbnailImageUrl: string;
  isLiked: boolean;
  tags: string[];
}

const CardSize: CardType = {
  lg: 'px-6 pb-[42px] w-72 h-96',
  sm: 'p-[17px] w-44 h-44',
};

const StarSize: CardType = {
  lg: 'top-[21px] right-[17px]',
  sm: 'top-2 right-1.5',
};

const PetNameSize: CardType = {
  lg: 'text-5xl leading-tight',
  sm: 'text-2xl leading-9',
};

const Card = ({
  size,
  petName,
  petProfileUrl,
  petThumbnailImageUrl,
  isLiked,
  tags,
}: CardProps) => {
  return (
    <div
      className={`relative flex flex-col justify-end items-center overflow-hidden rounded-2xl bg-cover bg-[url(${petThumbnailImageUrl})] ${CardSize[size]} hover:bg-indigo-900 hover:justify-center group`}
    >
      <Image
        className={`absolute cursor-pointer z-10 ${StarSize[size]}`}
        src={isLiked ? IconStarSelected : IconStar}
        alt='관심 등록 아이콘'
      />

      <div className='flex flex-wrap gap-2'>
        {tags.map((val, idx) => {
          if (size === 'lg' || (size === 'sm' && idx < 2)) {
            return (
              <Tag
                key={val + idx}
                type={'transparent'}
                size={size}
                label={val}
                isButton={false}
              />
            );
          }
          return null;
        })}
      </div>

      {/* 카드 hover */}
      <div className='flex flex-col group-hover:visible'>
        <span
          className={`font-bold text-center text-white ${PetNameSize[size]}`}
        >
          {petName}
        </span>
        <button
          className='flex items-center gap-[7px] border-none'
          onClick={() => {
            // 임시
            console.log(petProfileUrl);
          }}
        >
          <span className='text-sm font-semibold leading-tight tracking-wider text-center text-white'>
            MORE PROFILE
          </span>
          <div className='py-[17px] bg-white w-52 h-[1px]' />
          <Image
            src={IconArrow}
            width={size === 'lg' ? 4.5 : 3}
            height={size === 'lg' ? 8 : 5}
            alt='프로필 더보기 아이콘'
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
