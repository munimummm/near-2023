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
      options: ['lg', 'sm'],
    },
    borderRadius: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    state: 'enabled',
    placeholder: 'Enabled State',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    placeholder: 'Error State',
  },
};
export const Success: Story = {
  args: {
    state: 'success',
    placeholder: 'Success State',
  },
};
export const Disabled: Story = {
  args: {
    state: 'disabled',
    placeholder: 'Disabled State',
  },
};
export const Search: Story = {
  args: {
    state: 'search',
    placeholder: 'Search State',
  },
};
