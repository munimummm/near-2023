import { Icon } from './Icon';
import clsx from 'clsx';
import IconWrapper from './IconWrapper';
import type { IconResponsiveSize } from './Icon';
interface test {
  sizes: IconResponsiveSize;
}
function Text({ sizes = 'sm' }: test) {
  return (
    <span
      className={clsx(
        'text-[#545454] self-center',
        sizes === 'xs' && 'mobile:text-[0.625rem] mobile:leading-[0.625rem]',
        sizes === 'sm' && 'tablet:text-base desktop:text-base',
      )}
    >
      Home
    </span>
  );
}

export function IconText({ sizes }: test) {
  return (
    <IconWrapper>
      <Icon icon={'ic_search'} sizes={sizes} state={'default'} />
      <Text sizes={sizes} />
    </IconWrapper>
  );
}
