import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../ui/mode-toggle";

const meta: Meta<typeof ModeToggle> = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  render: () => <ModeToggle />
};
