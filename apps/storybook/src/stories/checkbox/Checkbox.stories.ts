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
  argTypes: {
    labelType: {
      table: {
        disabled: true,
      },
    },
  },
  decorators: [FormDecorator],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoText: Story = {
  args: {
    name: 'group1',
    labelType: 'notext',
    isDisabled: false,
    isResponsive: true,
  },
};

export const SingleText: Story = {
  args: {
    name: 'group2',
    label: 'Text',
    labelType: 'singletext',
    isDisabled: false,
    isResponsive: true,
  },
};

export const MultipleText: Story = {
  args: {
    name: 'group3',
    label: 'Text',
    multipleLabel: 'SubText',
    labelType: 'multipletext',
    isDisabled: false,
  },
};
