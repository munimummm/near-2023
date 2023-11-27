import { ReactNode } from 'react';
import { clsx } from '@near/clsx';

interface TagProps {
  mode?: 'main' | 'gray' | 'stroke' | 'translucent';
  isFlat?: boolean;
  children?: ReactNode;
  hasX?: boolean;
  handleTagClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleXClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const BaseStyle =
  'flex items-center justify-center gap-2 tablet:px-5 desktop:px-5 tablet:py-[0.625rem] desktop:py-[0.625rem] rounded-full border tablet:text-base tablet:font-normal desktop:text-base desktop:font-normal mobile:px-[0.875rem] mobile:py-2 mobile:text-xs mobile:font-medium';

const ColorStyle = {
  main: 'bg-theme-main border-theme-main text-white',
  gray: 'bg-bg-gray1 border-bg-gray1 text-text-black1',
  stroke: 'bg-transparent border-theme-main text-theme-main',
  translucent:
    'bg-white bg-opacity-70 border-white border-opacity-70 text-text-black1',
};

/**
 * @author `송용수`
 *
 * @desc Tag UI 컴포넌트
 *
 * @param mode
 * — (`'main'` | `'gray'` | `'stroke'` | `'translucent'`)
 * 버튼 색상 관련 테마를 제어하는 값. (Figma 참고)
 *
 * @param handleTagClick
 * — (`React.MouseEventHandler<HTMLButtonElement>`)
 * 태그 버튼의 클릭 이벤트 동작 함수. 작성 시 `(e) => {e.stopPropagation(); ... }` 방식으로 작성해야 함
 *
 * @param hasX
 * — (`boolean`)
 * 태그 내부에 X 버튼이 들어갈지 여부
 *
 * @param handleXClick
 * — (`React.MouseEventHandler<HTMLButtonElement>`)
 * 태그 내부 X 버튼의 클릭 이벤트 동작 함수.
 * 작성 시 `(e) => {e.stopPropagation(); ... }` 방식으로 작성해야 함
 *
 * @param children
 * — (`ReactNode`)
 * 태그 내부에 들어갈 요소 (string, 이미지 등)
 *
 * @param className
 * — (`string`)
 * 태그에 적용할 className
 */
const Tag = ({
  mode = 'main',
  isFlat = false,
  children,
  hasX,
  handleTagClick,
  handleXClick,
  className,
}: TagProps) => {
  return (
    <button
      className={clsx(
        BaseStyle,
        ColorStyle[mode],
        `${isFlat ? 'mobile:h-6 tablet:h-10 desktop:h-10' : ''}`,
        className,
      )}
      onClick={handleTagClick}
    >
      {children}
      {hasX ? (
        <button
          className='bg-transparent border-none w-[0.5625rem] h-[0.5625rem] cursor-pointer'
          onClick={(e) => {
            e.stopPropagation();
            handleXClick;
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='100%'
            viewBox='0 0 9 9'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.49744 5.29813L7.79324 8.59232L8.50052 7.88539L5.20472 4.59119L8.50074 1.29678L7.79346 0.589844L4.49744 3.88426L1.20142 0.589844L0.494141 1.29678L3.79016 4.59119L0.494359 7.88539L1.20164 8.59232L4.49744 5.29813Z'
              fill={`${
                mode === 'main'
                  ? '#fff'
                  : mode === 'stroke'
                  ? '#312E81'
                  : '#242424'
              }`}
            />
          </svg>
        </button>
      ) : null}
    </button>
  );
};

export default Tag;
