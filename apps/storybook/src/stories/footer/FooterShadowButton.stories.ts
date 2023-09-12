import { Meta, StoryObj } from '@storybook/react';
import FooterShadowButton from 'ui/components/footer/FooterShadowButton';
const meta = {
  title: 'Components/Footer/FooterShadowButton',
  component: FooterShadowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FooterShadowButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
