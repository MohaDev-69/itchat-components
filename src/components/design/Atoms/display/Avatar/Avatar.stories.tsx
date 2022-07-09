import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from ".";

export default {
  title: "design/Atoms/display/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: any) => (
  <Avatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: "https://cdn.discordapp.com/avatars/508449321176268801/4c4ac0cf1b75991c6a61059a72cf4c2c.png?size=1024",
  size: "256px",
  radius: "100%",
};
