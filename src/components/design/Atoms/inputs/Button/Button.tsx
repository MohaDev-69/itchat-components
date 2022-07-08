import React from "react";

import { Button } from '@mantine/core';

export const ButtonComponent = (props: { Size: string , hrefURL: string , openInNewTab: boolean , text: string , BtnIcon: string , color: string , onclick: string}) => {
    const {Size, hrefURL , openInNewTab , text , BtnIcon , color , onclick} = props;
    const [OpenInNewTab , setOpenInNewTab] = React.useState("");
    React.useEffect(() => {
        openInNewTab == true ? setOpenInNewTab("_blank") : setOpenInNewTab("");
    } , [])
  return( <>
        <a href={hrefURL} target={OpenInNewTab.length > 1 ? OpenInNewTab : ""}><Button size={Size}   rightIcon={BtnIcon} style={{backgroundColor: color}} onClick={(() => { eval(onclick) })}>{text}</Button></a>
  </>
  );
};
