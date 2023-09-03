import { Meta, StoryObj } from '@storybook/react';
import RadioButton from 'ui/components/radiobuttons/RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoText: Story = {
  args: {
    name: 'group1',
    value: 'option1',
    labelType: 'notext',
  },
};

export const SingleText: Story = {
  args: {
    label: 'Single Text Label',
    name: 'group1',
    value: 'option1',
    labelType: 'singletext',
  },
};
export const MultipleText: Story = {
  args: {
    label: 'Multiple Text Label',
    multipleLabel: 'Sub-label',
    name: 'group2',
    value: 'option1',
    labelType: 'multipletext',
  },
};
