import { Meta, StoryObj } from '@storybook/react';
import CommentAuthor from 'ui/components/comments/CommentAuthor';

const meta = {
  title: 'Components/Comments/CommentAuthor',
  component: CommentAuthor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentAuthor>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
