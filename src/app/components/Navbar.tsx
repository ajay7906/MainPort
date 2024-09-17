"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    // <div className="relative w-full flex items-center justify-center">
    //   <Navbar className="top-2" />
    //   <p className="text-black dark:text-white">
    //     The Navbar will show on top of the page
    //   </p>
    // </div>
    <Navbar/>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
       
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
         
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experience">
        
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Project">
        
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        
        </MenuItem>
      </Menu>
    </div>
  );
}
