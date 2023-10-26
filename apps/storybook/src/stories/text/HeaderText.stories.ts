import { Meta, StoryObj } from '@storybook/react';
import HeaderText from 'ui/components/text/HeaderText';

const meta = {
  title: 'Components/Text/HeaderText',
  component: HeaderText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    
  },
};