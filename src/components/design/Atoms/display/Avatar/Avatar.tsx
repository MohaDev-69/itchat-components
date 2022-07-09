import React, { useEffect, useRef, useState } from "react";
import { Avatar as MantineAvatar, MantineSize } from "@mantine/core";

import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  size?: MantineSize | string | undefined;
  radius?: MantineSize | string | undefined;
  src?: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export const Avatar = (props: IAvatarProps) => {
  const { size = "md", src, alt, radius } = props;
  return (
    <MantineAvatar
      radius={radius as MantineSize}
      size={size as MantineSize}
      src={src}
    >
      {alt?.[0]}
    </MantineAvatar>
  );
};
