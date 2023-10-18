import type { Meta, StoryObj } from '@storybook/react';
import Profiletime from 'ui/components/profile/Profiletime'

const meta = {
    title: 'Components/Profiletime',
    component: Profiletime,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof Profiletime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        nickname: '닉네임',
        time: '2023.3.5'
    },
  };