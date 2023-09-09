import { Meta, StoryObj } from '@storybook/react';
import Comment from 'ui/components/comments/Comment';

const meta = {
  title: 'Components/Comments/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Comment>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    commentLabel: '댓글댓글댓글',
  },
};
