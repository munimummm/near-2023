import { Icon } from './Icon';
import clsx from 'clsx';
import IconWrapper from './IconWrapper';
import type { IconResponsiveSize, Iconname } from './Icon';

type ExtractIconResponsiveSize = Extract<IconResponsiveSize, 'xs' | 'sm'>;

interface IconTextProps {
  icon: Iconname;
  sizes: ExtractIconResponsiveSize;
  text: string;
}

function Text({ sizes = 'sm', text }: IconTextProps) {
  return (
    <span
      className={clsx(
        'text-[#545454] self-center',
        sizes === 'xs' && 'mobile:text-[0.625rem] mobile:leading-[0.625rem]',
        sizes === 'sm' && 'tablet:text-base desktop:text-base',
      )}
    >
      {text}
    </span>
  );
}

export function IconText({ sizes, text, icon }: IconTextProps) {
  return (
    <IconWrapper>
      <Icon icon={icon} sizes={sizes} state={'default'} />
      <Text icon={icon} sizes={sizes} text={text} />
    </IconWrapper>
  );
}
