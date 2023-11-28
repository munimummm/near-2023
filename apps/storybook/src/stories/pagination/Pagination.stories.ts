import type { Meta, StoryObj } from '@storybook/react';
import Pagination from 'ui/components/pagination/Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    current: { control: 'number' },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 5,
    current: 1,
  },
};
