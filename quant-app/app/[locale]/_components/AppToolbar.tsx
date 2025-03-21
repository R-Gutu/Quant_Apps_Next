"use client"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import PCMenu from "./PCMenu";
import TalkModal from "@/components/TalkModal";

const AppToolbar = () =>{
  const [menuVisible, setMenuVisible] = useState(false)
  const [talkModalOpen, setTalkModalOpen] = useState(false)
  return (
    <>
      <PCMenu setMenuVisible={setMenuVisible} setTalkModalOpen={setTalkModalOpen}/>
      <MobileMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
     {talkModalOpen && <TalkModal isOpen= {talkModalOpen} setIsOpen={setTalkModalOpen}/>}
    </>
  )
}

export default AppToolbar;