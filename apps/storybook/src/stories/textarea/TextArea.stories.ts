import { Meta, StoryObj } from '@storybook/react';
import TextArea from 'ui/components/textarea/TextArea';
import { FormDecorator } from '../../../.storybook/decorators/FormDecorator';

const meta = {
  title: 'Components/TextArea/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [FormDecorator],
} satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'textarea',
    maxLength: 200,
    placeholder: '내용을 입력해 주세요',
  },
};
