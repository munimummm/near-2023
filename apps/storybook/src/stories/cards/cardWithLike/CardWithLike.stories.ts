import type { Meta, StoryObj } from '@storybook/react';

import CardWithLike from 'ui/components/cards/cardWithLike/CardWithLike';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Cards/CardWithLike',
  component: CardWithLike,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CardWithLike>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    src: 'https://picsum.photos/seed/picsum/200/300',
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
    isLiked: false,
    handleLikeButtonClick: () => {},
    petData: {
      lost_pet_id: 1,
      name: '세바스찬',
    },
  },
};
