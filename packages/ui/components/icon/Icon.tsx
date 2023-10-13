import SVGICON from './icon.json';

const ICON_NAME = {
  ic_search: 'ic_search',
  ic_noti: 'ic_noti',
  ic_noti_active: 'ic_noti_active',
  ic_hamburger: 'ic_hamburger',
  ic_x: 'ic_x',
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

export type Iconname = (typeof ICON_NAME)[keyof typeof ICON_NAME];

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

  return (
    <i id={type}>
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
