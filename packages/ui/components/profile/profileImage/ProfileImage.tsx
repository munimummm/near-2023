'use client';

import Image from 'next/image';
import { clsx } from '@near/clsx';

interface CommonProfileImageProps {
  className?: string;
}

export interface ProfileImageProps extends CommonProfileImageProps {
  src: string;
  isResponsive?: boolean;
  isSmallOnMobile?: boolean;
}

/**
 * @author `송용수`
 *
 * @desc 프로필 이미지 UI 컴포넌트
 *
 * @param src
 * — (`string`)
 * 프로필 이미지의 경로. (필수)
 *
 * @param isResponsive
 * — (`boolean`)
 * 반응형 여부. 기본값은 `true`. `false`일 경우 `width`, `height`은 7.5rem으로 고정. `isSmallOnMobile`은 무시됨.
 *
 * @param isSmallOnMobile
 * — (`boolean`)
 * `isResponsive`가 true일 경우, 모바일 화면에서 작은 크기로 렌더링 여부. 기본값은 `true`이며 `isResponsive`가 false일 경우 무시됨.
 *
 * @param hasNotification
 * — (`boolean`)
 * 알림 여부. 기본값은 `false`
 *
 * @param className
 * — (`string`)
 * 프로필 이미지에 적용할 className
 */
function ProfileImage({
  src = '/public/images/profile/img_profile_default.png',
  isResponsive = true,
  isSmallOnMobile = true,
  className = '',
}: ProfileImageProps) {
  return (
    <div
      className={clsx(
        'relative flex items-center justify-center rounded-full object-cover',
        `${
          isResponsive
            ? isSmallOnMobile
              ? 'mobile:w-5 mobile:h-5 tablet:w-10 tablet:h-10 desktop:w-10 desktop:h-10'
              : 'mobile:w-[2.375rem] mobile:h-[2.375rem] tablet:w-10 tablet:h-10 desktop:w-10 desktop:h-10'
            : 'mobile:w-[7.5rem] mobile:h-[7.5rem] tablet:w-[7.5rem] tablet:h-[7.5rem] desktop:w-[7.5rem] desktop:h-[7.5rem]'
        }`,
        className,
      )}
    >
      <Image
        src={src}
        fill
        priority
        sizes='100%'
        style={{ borderRadius: '100%' }}
        alt='프로필 이미지'
      />
    </div>
  );
}

export default ProfileImage;
