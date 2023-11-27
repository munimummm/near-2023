import type { Meta, StoryObj } from '@storybook/react';

import ModifyPet from 'ui/components/handlePet/ModifyPet';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/HandlePet/ModifyPet',
  component: ModifyPet,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ModifyPet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Main: Story = {
  args: {
    href: '/profile/pet/modify',
    name: '바비',
    src: 'https://picsum.photos/seed/picsum/200/300',
    gender: '남',
    age: 2,
    comment:
      '바비는 똑똑하고 장난기가 많아요. 바비는 똑똑하고 장난기가 많아요. 바비는 똑똑하고 장난기가 많아요.',
  },
};
