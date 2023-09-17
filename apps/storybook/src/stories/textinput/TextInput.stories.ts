import { Meta, StoryObj } from '@storybook/react';
import TextInput from 'ui/components/textinput/TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['enabled', 'error', 'success', 'disabled', 'search'],
    },
    size: {
      control: 'radio',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    borderRadius: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    state: 'enabled',
    placeholder: 'Placeholder',
    size: 'sm',
  },
};
