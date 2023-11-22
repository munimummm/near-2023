import { Meta, StoryObj } from '@storybook/react';
import Textbox from 'ui/components/text/Textbox';

const meta = {
  title: 'Components/Text/Textbox',
  component: Textbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    id: 'dhals123@naver.com',
    money: '20만원',
    surgery: '중성화 수술',
    inoculation: '접종 1회',
    test: '사상충 검사기트',
  },
};
