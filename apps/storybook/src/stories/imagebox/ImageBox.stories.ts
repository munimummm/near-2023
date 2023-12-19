import type { Meta, StoryObj } from '@storybook/react';
import { ImageBox } from 'ui/components/imagebox/ImageBox';

const meta = {
  title: 'Components/ImageBox',
  component: ImageBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
