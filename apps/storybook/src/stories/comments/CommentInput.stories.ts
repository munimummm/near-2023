import { Meta, StoryObj } from '@storybook/react';
import CommentInput from 'ui/components/comments/CommentInput';

const meta = {
  title: 'Components/Comments/CommentInput',
  component: CommentInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
