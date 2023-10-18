import SVGICON from './icon.json';

const ICON_NAME = {
  ic_search: 'ic_search',
  ic_noti: 'ic_noti',
  ic_noti_active: 'ic_noti_active',
  ic_hamburger: 'ic_hamburger',
  ic_x: 'ic_x',
  ic_error: 'ic_error',
  ic_calender: 'ic_calender',
  ic_more: 'ic_more',
  ic_arrow_right: 'ic_arrow_right',
  ic_chevron_right: 'ic_chevron_right',
  ic_chevron_down: 'ic_chevron_down',
  ic_chevron_down_bold: 'ic_chevron_down_bold',
  ic_heart: 'ic_heart',
  ic_heart_fill: 'ic_heart_fill',
  ic_share: 'ic_share',
  ic_visible: 'ic_visible',
  ic_hidden: 'ic_hidden',
  ic_caution: 'ic_caution',
  ic_add: 'ic_add',
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
  active: '#3730a3',
  negative: '#cc3b3b',
  positive: '#00AE46',
  mild: '#A3A3A3',
} as const;

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME];

export type IconResponsiveSize =
  (typeof ICON_RESPONSIVE_SIZE)[keyof typeof ICON_RESPONSIVE_SIZE];

interface IconProps {
  icon: IconName;
  sizes: IconResponsiveSize;
  state: 'default' | 'active' | 'negative' | 'positive' | 'mild';

  //state: 'default' | 'active' | 'negative'
}
export function Icon({ icon, state, sizes }: IconProps) {
  const { type } = SVGICON[icon];

  const { width, height, path, viewBox } = SVGICON[icon].size[sizes];

  return (
    <i id={type} className='flex items-center'>
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
