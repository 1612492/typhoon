import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../components/dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
