import type { Meta, StoryObj } from '@storybook/react';

import PostThumbnailCard from 'ui/components/cards/postThumbnailCard/PostThumbnailCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Cards/PostThumbnailCard',
  component: PostThumbnailCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PostThumbnailCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    href: '/',
    src: 'https://picsum.photos/seed/picsum/200/300',
    category: '카테고리',
    title:
      '글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목글제목',
    date: '2023.12.25',
    author: '니어팀',
  },
};
