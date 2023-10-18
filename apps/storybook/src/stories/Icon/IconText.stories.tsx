import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from 'ui/index';

const meta = {
  title: 'Components/IconText',
  component: IconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'radio',
      options: [
        'ic_search',
        'ic_noti',
        'ic_noti_active',
        'ic_hamburger',
        'ic_x',
        'ic_error',
        'ic_calender',
        'ic_more',
        'ic_arrow_right',
        'ic_chevron_right',
        'ic_chevron_down',
        'ic_chevron_down_bold',
        'ic_heart',
        'ic_heart_fill',
        'ic_share',
        'ic_visible',
        'ic_hidden',
        'ic_caution',
        'ic_add',
        'ic_check',
      ],
    },
  },
} satisfies Meta<typeof IconText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    icon: 'ic_search',
    sizes: 'sm',
    text: 'Home',
    // state: 'default',
  },
};
