import Checkbox from 'ui/components/checkbox/Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { FormDecorator } from '../../../.storybook/decorators/FormDecorator';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [FormDecorator],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoText: Story = {
  args: {
    name: 'group1',
    value: 'option1',
    labelType: 'notext',
    isDisabled: false,
  },
};

export const SingleText: Story = {
  args: {
    label: 'Text',
    name: 'group1',
    value: 'option1',
    labelType: 'singletext',
    isDisabled: false,
  },
};
export const MultipleText: Story = {
  args: {
    label: 'Text',
    multipleLabel: 'SubText',
    name: 'group2',
    value: 'option1',
    labelType: 'multipletext',
    isDisabled: false,
  },
};
