import { Meta, StoryObj } from '@storybook/react';
import Subheading from 'ui/components/text/Subheading';

const meta = {
  title: 'Components/Text/Subheading',
  component: Subheading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Subheading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    
  },
};
