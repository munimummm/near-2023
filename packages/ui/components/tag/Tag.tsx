import Image from 'next/image';
import IconTagDeleteWhite from '../../assets/icons/tag/icon_tag_white.svg';
import IconTagDeleteGray from '../../assets/icons/tag/icon_tag_gray.svg';
import IconTagDeleteStroke from '../../assets/icons/tag/icon_tag_stroke.svg';

type TagType = {
  [key: string]: string;
};

interface TagProps {
  type: 'color' | 'gray' | 'transparent' | 'stroke';
  size: 'lg' | 'sm';
  label: string;
  isButton: boolean;
}

const BgSize: TagType = {
  lg: 'px-6 py-1.5 gap-3',
  sm: 'px-4 py-2 gap-2',
};

const TextSize: TagType = {
  lg: 'text-base',
  sm: 'text-xs',
};

const BgType: TagType = {
  color: 'bg-indigo-900',
  gray: 'bg-neutral-200',
  transparent: 'bg-white bg-opacity-70 backdrop-blur-sm',
  stroke: 'border border-indigo-900 ',
};

const TextType: TagType = {
  color: 'text-white font-medium',
  gray: 'text-neutral-800 font-normal',
  transparent: 'text-neutral-800 font-normal',
  stroke: 'text-indigo-950 font-medium',
};

const Tag = ({ type, size, label, isButton }: TagProps) => {
  return (
    <div
      className={`inline-flex items-center justify-between rounded-full
      ${BgSize[size ?? 'lg']} 
      ${BgType[type ?? 'color']}
    `}
    >
      <span
        className={`text-base tracking-tight 
        ${TextSize[size ?? 'lg']} 
        ${TextType[type] ?? 'color'}`}
      >
        {label}
      </span>

      {isButton ? (
        <Image
          className='cursor-pointer'
          src={
            type === 'color'
              ? IconTagDeleteWhite
              : type === 'stroke'
              ? IconTagDeleteStroke
              : IconTagDeleteGray
          }
          alt='태그 닫기 버튼'
        />
      ) : null}
    </div>
  );
};

export default Tag;
