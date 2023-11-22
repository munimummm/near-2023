import { Meta, StoryObj } from '@storybook/react';
import CommentBox from 'ui/components/textarea/CommentBox';

const meta = {
  title: 'Components/TextArea/CommentBox',
  component: CommentBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommentBox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
