import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  return (
    <Dropdown
      menu={
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      }
    >
      <button className="border p-2 rounded">Click Me</button>
    </Dropdown>
  );
}

export const Default: Story = {
  render: () => <Container />,
};
