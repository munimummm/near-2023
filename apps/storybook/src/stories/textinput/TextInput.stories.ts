import { Meta, StoryObj } from '@storybook/react';
import TextInput from 'ui/components/textinput/TextInput';
import { FormDecorator } from '../../../.storybook/decorators/FormDecorator';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [FormDecorator],
} satisfies Meta<typeof TextInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    name: 'input',
    state: 'enabled',
    placeholder: 'Placeholder',
  },
};
