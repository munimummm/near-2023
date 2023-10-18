import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'ui/components/icon/Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['default', 'active', 'negative', 'positive', 'mild'],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    icon: 'ic_search',
    sizes: 'sm',
    state: 'default',
  },
};
