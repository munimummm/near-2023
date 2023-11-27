import Image from 'next/image';
import Link from 'next/link';

interface PostThumbnailText {
  category: string;
  title: string;
  date: string;
  author: string;
}

interface PostThumbnailImageProps {
  src: string;
}

interface PostThumbnailProps
  extends PostThumbnailText,
    PostThumbnailImageProps {
  href: string;
}

function PostThumbnailText({
  category,
  title,
  date,
  author = '니어팀',
}: PostThumbnailText) {
  return (
    <div className='flex-col w-full'>
      <span className='text-sm font-medium leading-tight text-theme-main'>
        {category}
      </span>
      <span className='text-xl font-medium line-clamp-1 text-text-black1'>
        {title}
      </span>
      <div className='flex gap-2 first:after:content-["|"]'>
        <span className='text-xs font-normal leading-none text-text-gray'>
          {date}
        </span>
        <span className='text-xs font-normal leading-none text-text-gray'>{`By ${author}`}</span>
      </div>
    </div>
  );
}

function PostThumbnailImage({ src }: PostThumbnailImageProps) {
  return (
    <div className='relative object-cover overflow-hidden rounded w-[7.5rem] h-20'>
      <Image src={src} fill alt='게시물 썸네일 이미지' />;
    </div>
  );
}

/**
 * @author `송용수`
 *
 * @desc 게시물 썸네일 카드 UI 컴포넌트
 *
 * @param src
 * — (`string`)
 * 게시물 썸네일 이미지 경로 (필수)
 *
 * @param category
 * — (`string`)
 * 게시물 카테고리
 *
 * @param title
 * — (`string`)
 * 게시물 제목
 *
 * @param date
 * — (`string`)
 * 게시물 작성일
 *
 * @param author
 * — (`string`)
 * 게시물 작성자
 */
function PostThumbnailCard({
  href,
  src,
  category,
  title,
  date,
  author,
}: PostThumbnailProps) {
  return (
    <Link
      href={href}
      className='flex items-center h-20 px-4 mobile:[30rem] gap-5 tablet:w-[40.25rem] tablet:px desktop:w-[40.25rem]'
    >
      <PostThumbnailImage src={src} />
      <PostThumbnailText
        category={category}
        title={title}
        date={date}
        author={author}
      />
    </Link>
  );
}

export default PostThumbnailCard;
