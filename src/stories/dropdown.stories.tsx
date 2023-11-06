import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
