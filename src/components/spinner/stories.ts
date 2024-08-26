import { Spinner } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      name: "Size",
      type: { name: "number" },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSpinner: Story = {};
export const SmallSpinner: Story = {
  args: {
    size: 25,
  },
};
export const BigSpinner: Story = {
  args: {
    size: 100,
  },
};
