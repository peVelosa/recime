import { Navbar } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarComponent: Story = {
  name: "Navbar",
  args: {},
};
