import type { Meta, StoryObj } from '@storybook/react';

import VolunteerCard from 'ui/components/cards/volunteerCard/VolunteerCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Cards/VolunteerCard',
  component: VolunteerCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof VolunteerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    src: 'https://picsum.photos/seed/picsum/200/300',
    id: 1,
    title: '청소봉사',
    subTitle:
      '보호소에 있는 견사와 배설물을 치우고, 배변패드 및 이불정리, 물걸레질 등이 주된 봉사내용 입니다.',
  },
};
