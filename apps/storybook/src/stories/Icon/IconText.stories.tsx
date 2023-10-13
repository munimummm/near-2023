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
      options: ['ic_search', 'ic_noti', 'ic_noti_active'],
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
