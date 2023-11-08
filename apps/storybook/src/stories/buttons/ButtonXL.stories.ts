import type { Meta, StoryObj } from '@storybook/react';

import { ButtonXL } from 'ui/components/buttons/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ButtonXL',
  component: ButtonXL,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: 'ButtonXL',
    onClick: () => alert('버튼 클릭'),
  },
  argTypes: {
    children: {
      control: 'text',
    },
    mode: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ButtonXL>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    mode: 'main',
    isDisabled: false,
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    mode: 'secondary',
    isDisabled: false,
    type: 'button',
  },
};

export const Ghost: Story = {
  args: {
    mode: 'ghost',
    isDisabled: false,
    type: 'button',
  },
};

export const Outline: Story = {
  args: {
    mode: 'outline',
    isDisabled: false,
    type: 'button',
  },
};

export const Text: Story = {
  args: {
    mode: 'text',
    isDisabled: false,
    type: 'button',
  },
};

export const Danger: Story = {
  args: {
    mode: 'danger',
    isDisabled: false,
    type: 'button',
  },
};
