import { useEffect, useRef, useState } from 'react';
import SVGICON from './icon.json';
import IconWrapper from './IconWrapper';
import clsx from 'clsx';
const ICON_NAME = {
  ic_search: 'ic_search',
  // ic_search_sm: 'ic_search_sm',
} as const;

const ICON_RESPONSIVE_SIZE = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;

const States = {
  default: '#545454',
  active: '#ff3434',
  negative: '#ff4343',
  positive: '#545454',
} as const;

type Iconname = (typeof ICON_NAME)[keyof typeof ICON_NAME];
export type IconResponsiveSize =
  (typeof ICON_RESPONSIVE_SIZE)[keyof typeof ICON_RESPONSIVE_SIZE];
interface IconProps {
  icon: Iconname;
  sizes: IconResponsiveSize;
  state: 'default' | 'active' | 'negative' | 'positive';

  //state: 'default' | 'active' | 'negative'
}
export function Icon({ icon, state, sizes }: IconProps) {
  const { type } = SVGICON[icon];
  const { width, height, path, viewBox } = SVGICON[icon].size[sizes];
  const texts = useRef<HTMLSpanElement>(null);

  return (
    <i aria-label={type}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d={path} fill={States[state]} />
      </svg>
    </i>
  );
}
