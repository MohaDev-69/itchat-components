import React from "react";

import { Button, MantineSize } from "@mantine/core";
export interface IButtonProps {
  size?: MantineSize;
  text?: string;
  color?: string;
  rightIcon?: string;
  leftIcon?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export const ButtonComponent = (props: IButtonProps) => {
  const { size = "md", text, rightIcon, leftIcon, color, onClick } = props;
  return (
    <Button
      size={size}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
