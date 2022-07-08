import React from "react";

import { Button, MantineSize } from "@mantine/core";
export interface IButtonProps {
  href: string;
  newTab: boolean;
  size: MantineSize;
  text: string;
  color: string;
  rightIcon: string;
  leftIcon: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export const ButtonComponent = (props: IButtonProps) => {
  const { size, href, newTab, text, rightIcon, leftIcon, color, onClick } =
    props;
  const [NewTab, SetNewTab] = React.useState("");
  React.useEffect(() => {
    newTab == true ? SetNewTab("_blank") : SetNewTab("");
  }, [newTab]);
  return (
    <a href={href} target={NewTab}>
      <Button
        size={size}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </Button>
    </a>
  );
};
