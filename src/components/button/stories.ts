import { Button } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      name: "children",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: "Button text",
  },
};
