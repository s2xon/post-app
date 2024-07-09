import React from "react";
import NavButton from "./ui/NavButton";
import LogoText from "./ui/LogoText";
import AuthButtons from "./AuthButtons";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="px-4 min-w-[100vw] min-h-20 flex flex-nowrap justify-between items-center border-b border-white border-opacity-25 fixed">
      <LogoText
        className={"cursor-pointer mx-2 min-h-9 max-h-9 min-w-28 max-w-28"}
      />
      <div className="hidden lg:inline-flex justify-center items-center w-auto">
        <NavButton innerText="Home"></NavButton>
        <NavButton innerText="Features"></NavButton>
        <NavButton innerText="How it Works"></NavButton>
        <NavButton innerText="Pricing"></NavButton>
      </div>
      <div className="flex justify-center items-center">
        <AuthButtons innerText="Join" authLocation="/signup" />
        <AuthButtons innerText="Sign in" authLocation="/login" />
        <Drawer>
          <DrawerTrigger className="lg:hidden flex items-center justify-center flex-wrap px-[5px] py-[12px] rounded-full size-auto h-9 w-9 relative z-10 bg-[#fff] bg-opacity-25 shadow-md hover:bg-zinc-900 hover:outline-slate-200 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <span className="rounded-full w-[20px] h-[2px] bg-white"></span>
            <span className="rounded-full w-[20px] h-[2px] bg-white"></span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Nav;
