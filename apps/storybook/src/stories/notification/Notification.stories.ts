import { Meta, StoryObj } from '@storybook/react';
import Notification from 'ui/components/notification/Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Notification>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    time: '2023.3.5',
    number: '09',
  },
};
