import type { Meta, StoryObj } from '@storybook/react';
import Branch from 'ui/components/branch/Branch'

const meta = {
    title: 'Components/Branch',
    component: Branch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof Branch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        count: '55',
    },
  };