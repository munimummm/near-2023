import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from 'ui/components/icon/IconText';

const meta = {
  title: 'Components/IconText',
  component: IconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // state: {
    //   control: 'radio',
    //   options: ['default', 'active', 'negative', 'active'],
    // },
  },
} satisfies Meta<typeof IconText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    // icon: 'ic_search',
    sizes: 'sm',
    // state: 'default',
  },
};
