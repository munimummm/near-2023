import type { Meta, StoryObj } from '@storybook/react';
import DotPagination from 'ui/components/pagination/DotPagination';

const meta = {
  title: 'Components/DotPagination',
  component: DotPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    current: { control: 'number' },
  },
} satisfies Meta<typeof DotPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 5,
    current: 1,
  },
};
