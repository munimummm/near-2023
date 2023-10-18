import type { Meta, StoryObj } from '@storybook/react';
import MapPointer from 'ui/components/map/MapPointer'

const meta = {
    title: 'Components/MapPointer',
    component: MapPointer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof MapPointer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        
    },
  };