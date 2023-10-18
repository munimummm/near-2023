import { Meta, StoryObj } from '@storybook/react';
import TextWithButton from 'ui/components/text/TextWithButton';

const meta = {
  title: 'Components/Text/TextWithButton',
  component: TextWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextWithButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    
  },
};