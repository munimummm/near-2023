import { Meta, StoryObj } from '@storybook/react';
import FooterShadowButtons from 'ui/components/footer/FooterShadowButtons';
const meta = {
  title: 'Components/Footer/FooterShadowButtons',
  component: FooterShadowButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FooterShadowButtons>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
