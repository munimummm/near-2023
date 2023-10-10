import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'ui/components/icon/Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'ic_search_sm',
    color: '#545454',
  },
};
