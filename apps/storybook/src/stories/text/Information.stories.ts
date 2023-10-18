import { Meta, StoryObj } from '@storybook/react';
import Information from 'ui/components/text/Information';

const meta = {
  title: 'Components/Text/Information',
  component: Information,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Information>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    shelter: '으아앙아'
  },
};