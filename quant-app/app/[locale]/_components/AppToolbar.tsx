"use client"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import PCMenu from "./PCMenu";

const AppToolbar = () =>{
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <>
      <PCMenu setMenuVisible={setMenuVisible}/>
      <MobileMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
    </>
  )
}

export default AppToolbar;