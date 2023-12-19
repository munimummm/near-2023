import { Meta, StoryObj } from '@storybook/react';
import Tooltips from 'ui/components/tooltip/Tooltip';

const meta = {
  title: 'Components/Tooltips',
  component: Tooltips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tooltips>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    content: '툴팁입니다!!!',
  },
};
