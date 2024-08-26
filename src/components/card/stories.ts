import { Card } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    difficulty: {
      options: ["easy", "medium", "hard"],
    },
    name: {
      name: "name",
    },
    isHighlighted: {
      name: "isHighlighted",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EasyCard: Story = {
  args: {
    difficulty: "easy",
    name: "Beef Burger",
    isHighlighted: false,
  },
};
export const MediumCard: Story = {
  args: {
    difficulty: "medium",
    name: "Beef Burger",
    isHighlighted: false,
  },
};
export const HardCard: Story = {
  args: {
    difficulty: "hard",
    name: "Vegan Burger",
    isHighlighted: false,
  },
};
export const HighlightedCard: Story = {
  args: {
    difficulty: "hard",
    name: "Chicken Burger",
    isHighlighted: true,
  },
};
