'use client';

import Image from 'next/image';
import { clsx } from '@near/clsx';
import Tag from '../../tags/Tag';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface CardBlockCommonProps {
  className?: string;
}

interface BackgroundImageProps extends CardBlockCommonProps {
  src: string;
}

interface TagGroupProps extends CardBlockCommonProps {
  tags?: string[];
}

interface LikeButtonProps extends CardBlockCommonProps {
  isLiked: boolean;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
  handleLikeButtonClick?: (
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

interface PetDataProps {
  lost_pet_id: number;
  name: string;
}

interface CardProps {
  cardNumber: number;
}
interface CardBlockProps extends CardBlockCommonProps {
  petData: PetDataProps;
}

function BackgroundImage({ src }: BackgroundImageProps) {
  return (
    <Image
      className={clsx('object-cover w-full h-full')}
      fill
      src={src}
      alt={`CardBlock Image`}
    />
  );
}

function TagGroup({ tags, className }: TagGroupProps) {
  return (
    <div
      className={clsx(
        'absolute flex justify-center w-full flex-wrap gap-2 mobile:bottom-[1.0625rem] tablet:bottom-[2.0625rem] desktop:bottom-[2.0625rem] mobile:[&>*:nth-child(3)]:hidden mobile:[&>*:nth-child(4)]:hidden mobile:[&>*:nth-child(5)]:hidden tablet:[&>*:nth-child(3)]:flex tablet:[&>*:nth-child(4)]:flex tablet:[&>*:nth-child(5)]:flex desktop:[&>*:nth-child(3)]:flex desktop:[&>*:nth-child(4)]:flex desktop:[&>*:nth-child(5)]:flex',
        className,
      )}
    >
      {tags?.map((val, idx) => {
        if (idx > 4) return;
        return (
          <Tag
            className='z-10 cursor-default'
            key={`${idx}-${val}`}
            mode='translucent'
            isFlat={true}
            hasX={false}
            handleTagClick={(e) => e.stopPropagation()}
          >
            {val}
          </Tag>
        );
      })}
    </div>
  );
}

// function LikeButton({
//   isLiked,
//   setIsLiked,
//   handleLikeButtonClick = () => {},
//   className,
// }: LikeButtonProps) {
//   const handleButtonClick = (
//     e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//   ) => {
//     e?.stopPropagation();
//     setIsLiked((prev) => !prev);
//     handleLikeButtonClick(e);
//   };
//
//   return (
//     <button
//       className={clsx(
//         'z-10 absolute bg-transparent border-none mobile:w-5 mobile:h-[1.1875rem] mobile:top-4 mobile:right-4 tablet:w-[2.0625rem] tablet:h-8 tablet:top-6 tablet:right-6 desktop:w-[2.0625rem] desktop:h-8 desktop:top-6 desktop:right-6',
//         className,
//       )}
//       onClick={handleButtonClick}
//     >
//       {isLiked ? (
//         <svg
//           width='100%'
//           height='100%'
//           viewBox='0 0 33 32'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M16.3027 30.5469C16.1465 30.5469 15.959 30.5 15.7402 30.4062C15.5319 30.3229 15.3444 30.2292 15.1777 30.125C12.2402 28.25 9.69336 26.2865 7.53711 24.2344C5.38086 22.1719 3.71419 20.0573 2.53711 17.8906C1.37044 15.7135 0.787109 13.5156 0.787109 11.2969C0.787109 9.91146 1.00586 8.64583 1.44336 7.5C1.89128 6.34375 2.51107 5.34375 3.30273 4.5C4.0944 3.65625 5.01628 3.00521 6.06836 2.54688C7.12044 2.08854 8.26107 1.85938 9.49023 1.85938C11.0215 1.85938 12.3652 2.25 13.5215 3.03125C14.6777 3.8125 15.6048 4.84375 16.3027 6.125C17.0111 4.83333 17.9434 3.80208 19.0996 3.03125C20.2559 2.25 21.5944 1.85938 23.1152 1.85938C24.3444 1.85938 25.485 2.08854 26.5371 2.54688C27.5996 3.00521 28.5215 3.65625 29.3027 4.5C30.0944 5.34375 30.709 6.34375 31.1465 7.5C31.5944 8.64583 31.8184 9.91146 31.8184 11.2969C31.8184 13.5156 31.2298 15.7135 30.0527 17.8906C28.8861 20.0573 27.2246 22.1719 25.0684 24.2344C22.9225 26.2865 20.3809 28.25 17.4434 30.125C17.2767 30.2292 17.084 30.3229 16.8652 30.4062C16.6569 30.5 16.4694 30.5469 16.3027 30.5469Z'
//             fill='#fff'
//           />
//         </svg>
//       ) : (
//         <svg
//           width='100%'
//           height='100%'
//           viewBox='0 0 33 32'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             d='M0.787109 11.2969C0.787109 9.91146 1.00586 8.64583 1.44336 7.5C1.89128 6.34375 2.51628 5.34375 3.31836 4.5C4.12044 3.65625 5.05794 3.00521 6.13086 2.54688C7.21419 2.08854 8.38607 1.85938 9.64648 1.85938C11.0944 1.85938 12.3913 2.17708 13.5371 2.8125C14.6829 3.44792 15.6048 4.29167 16.3027 5.34375C17.0111 4.29167 17.9329 3.44792 19.0684 2.8125C20.2142 2.17708 21.5111 1.85938 22.959 1.85938C24.2298 1.85938 25.4017 2.08854 26.4746 2.54688C27.5579 3.00521 28.4954 3.65625 29.2871 4.5C30.0892 5.34375 30.709 6.34375 31.1465 7.5C31.5944 8.64583 31.8184 9.91146 31.8184 11.2969C31.8184 13.5156 31.2298 15.7135 30.0527 17.8906C28.8861 20.0573 27.2246 22.1719 25.0684 24.2344C22.9225 26.2865 20.3809 28.25 17.4434 30.125C17.2767 30.2292 17.084 30.3229 16.8652 30.4062C16.6569 30.5 16.4694 30.5469 16.3027 30.5469C16.1465 30.5469 15.959 30.5 15.7402 30.4062C15.5319 30.3229 15.3444 30.2292 15.1777 30.125C12.2402 28.25 9.69336 26.2865 7.53711 24.2344C5.38086 22.1719 3.71419 20.0573 2.53711 17.8906C1.37044 15.7135 0.787109 13.5156 0.787109 11.2969ZM3.30273 11.2969C3.30273 12.7448 3.65169 14.2135 4.34961 15.7031C5.04753 17.1823 5.99544 18.6354 7.19336 20.0625C8.39128 21.4896 9.74544 22.8542 11.2559 24.1562C12.7767 25.4479 14.3548 26.6354 15.9902 27.7188C16.1569 27.8438 16.2611 27.9062 16.3027 27.9062C16.3444 27.9062 16.4538 27.8438 16.6309 27.7188C18.2663 26.6354 19.8392 25.4479 21.3496 24.1562C22.8704 22.8542 24.2246 21.4896 25.4121 20.0625C26.61 18.6354 27.5579 17.1823 28.2559 15.7031C28.9538 14.2135 29.3027 12.7448 29.3027 11.2969C29.3027 9.91146 29.0267 8.70312 28.4746 7.67188C27.9329 6.63021 27.1829 5.82292 26.2246 5.25C25.2767 4.66667 24.1986 4.375 22.9902 4.375C22.0111 4.375 21.1673 4.55208 20.459 4.90625C19.7611 5.25 19.1569 5.6875 18.6465 6.21875C18.1465 6.73958 17.7194 7.25521 17.3652 7.76562C17.1361 8.06771 16.9486 8.27604 16.8027 8.39062C16.6569 8.50521 16.4902 8.5625 16.3027 8.5625C16.1152 8.5625 15.9434 8.51042 15.7871 8.40625C15.6413 8.29167 15.459 8.07812 15.2402 7.76562C14.9069 7.24479 14.4902 6.72396 13.9902 6.20312C13.4902 5.68229 12.8809 5.25 12.1621 4.90625C11.4434 4.55208 10.5944 4.375 9.61523 4.375C8.4069 4.375 7.32357 4.66667 6.36523 5.25C5.41732 5.82292 4.66732 6.63021 4.11523 7.67188C3.57357 8.70312 3.30273 9.91146 3.30273 11.2969Z'
//             fill='#fff'
//           />
//         </svg>
//       )}
//     </button>
//   );
// }

/**
 * @author `송용수`
 *
 * @desc 우측 상단에 좋아요 버튼이 있는 카드 UI 컴포넌트.
 *
 * @param src
 * — (`string`)
 * 카드에 들어갈 이미지 (필수)
 *
 * @param tags
 * — (`string[]`)
 * 카드에 들어갈 태그 레이블들
 *
 * @param isLiked
 * — (`boolean`)
 * 좋아요 버튼의 활성화 여부 state (필수)
 *
 * @param setIsLiked
 * — (`React.Dispatch<React.SetStateAction<boolean>>`)
 * 좋아요 버튼의 활성화 여부를 변경하는 setState 함수 (필수)
 *
 * @param handleLikeButtonClick
 * — (`React.MouseEventHandler<HTMLButtonElement>`)
 * 좋아요 버튼의 클릭 이벤트 동작 함수
 *
 * @param petData
 * — (`{ lost_pet_id: number; name: string; }`)
 * 카드에 들어갈 동물 데이터
 */
function CardWithLike({
  src,
  tags,
  cardNumber,
  // isLiked,
  // setIsLiked,
  // handleLikeButtonClick,
  petData,
}: CardBlockProps &
  BackgroundImageProps &
  TagGroupProps &
  LikeButtonProps &
  CardProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [is, setIs] = useState(-1);

  useEffect(() => {
    setIs(cardNumber);
  }, [isClicked, is]);
  useEffect(() => {}, [is]);

  return (
    <button
      key={cardNumber}
      className='relative overflow-hidden cursor-default bg-gray-2 border-none mobile:w-[12.5rem] mobile:h-[12.5rem] mobile:rounded-2xl tablet:w-[17.6875rem] tablet:h-[23.5625rem] tablet:rounded-3xl desktop:w-[17.6875rem] desktop:h-[23.5625rem] desktop:rounded-3xl'
      onClick={() => {
        // setIsClicked(!isClicked);
        setIs(cardNumber);
        setIsClicked(true);
        // if (is !== cardNumber) {
        //   setIsClicked(false);
        // }
        console.log(is, cardNumber);
        console.log(isClicked);
      }}
    >
      <BackgroundImage className={clsx('absolute top-0 left-0')} src={src} />
      {/* <LikeButton
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        handleLikeButtonClick={handleLikeButtonClick}
      /> */}
      {isClicked ? (
        <div className='background-white/[0.05] backdrop-blur-xl absolute flex flex-col justify-center items-center w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mobile:gap-2 mobile:px-8 tablet:gap-5 tablet:px-9 desktop:gap-5 desktop:px-9 mobile:rounded-2xl tablet:rounded-3xl desktop:rounded-3xl'>
          <span className='text-center text-white mobile:text-2xl mobile:font-semibold tablet:text-5xl tablet:font-bold desktop:text-5xl desktop:font-bold'>
            {petData.name}
          </span>
          <div className='w-full h-[0.0625rem] bg-white' />
          <Link
            className='flex items-center mobile:gap-2 tablet:gap-3 desktop:gap-3'
            href={`/pet/${petData.lost_pet_id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className='text-center text-white font-normal mobile:leading-[0.625rem] mobile:tracking-wide tablet:text-sm tablet:leading-tight tablet:tracking-widest desktop:text-sm desktop:leading-tight desktop:tracking-widest'>
              MORE PROFILE
            </span>
            <div className='mobile:w-[0.3125rem] mobile:h-[0.5625rem] tablet:w-[0.375rem] tablet:h-[0.625rem] desktop:w-[0.375rem] desktop:h-[0.625rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 6 10'
                fill='none'
              >
                <path
                  d='M0.533203 1.06055L5.08066 5.03958L0.533203 9.0186'
                  stroke='#fff'
                  stroke-width='1.13687'
                />
              </svg>
            </div>
          </Link>
        </div>
      ) : (
        <TagGroup tags={tags} />
      )}
    </button>
  );
}

export default CardWithLike;
