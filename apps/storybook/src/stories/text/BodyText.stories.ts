import { Meta, StoryObj } from '@storybook/react';
import BodyText from 'ui/components/text/BodyText';

const meta = {
  title: 'Components/Text/BodyText',
  component: BodyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BodyText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    content:
      '가나다라마바사자차카타파하가나다라마바사자차카타파하가나다라마바사자차카타파하가나다라마바사자차카타파하가나다라마바사자차카타파하',
  },
};
