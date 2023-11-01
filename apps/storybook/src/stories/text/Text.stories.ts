import { Meta, StoryObj } from '@storybook/react';
import Text from 'ui/components/text/Text';

const meta = {
  title: 'Components/Text/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    content: '긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트'
  },
};