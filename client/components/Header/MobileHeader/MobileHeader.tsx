"use client";
import ContentZone from "../../ui/ContentZone/ContentZone";
import Logo from "../../ui/Logo";
import NavigationIcons from "../NavigationIcons/NavigationIcons";
import Burger from "../Burger/Burger";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="mt-4 lg:hidden">
      <ContentZone className="flex items-center justify-between">
        <Logo />
        <NavigationIcons setOpen={setOpen} open={open} />
      </ContentZone>
      <AnimatePresence>
        {open && <Burger setOpen={setOpen} open={open} />}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;
