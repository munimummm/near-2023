import type { Meta, StoryObj } from '@storybook/react';
import { FormDecorator } from '../../../.storybook/decorators/FormDecorator';
import RadioTag from 'ui/components/tags/RadioTag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Tags/RadioTag',
  component: RadioTag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [FormDecorator],
} satisfies Meta<typeof RadioTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    children: 'Tag',
    hasX: false,
    name: 'tag1',
    value: 'option1',
    handleXClick: (e) => {
      e.stopPropagation();
      alert('X clicked');
    },
  },
};
