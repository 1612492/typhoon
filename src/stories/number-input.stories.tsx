import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput } from '../';
import { useState } from 'react';

const meta: Meta<typeof NumberInput> = {
  title: 'NumberInput',
  component: NumberInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

function Container() {
  const [value, setValue] = useState<string>();

  return (
    <NumberInput
      value={value}
      onChangeText={(text) => setValue(text)}
      className="rounded border p-2"
    />
  );
}

export const Default: Story = {
  render: () => <Container />,
};
