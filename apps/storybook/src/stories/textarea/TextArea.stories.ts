import { Meta, StoryObj } from '@storybook/react';
import TextArea from 'ui/components/textarea/TextArea';

const meta = {
  title: 'Components/TextArea/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 200,
    placeholder: '내용을 입력해 주세요',
  },
};
