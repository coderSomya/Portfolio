"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { ModeToggle } from "./theme-button";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Tech",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/tech",
    },
    {
      title: "Blogs",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Socials",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/coderSomya",
    },
  ];
  return (
    (
        <nav className="bg-background/50 border-b shadow-md fixed w-full top-0 z-50 mb-4 backdrop-blur">

    <div className="flex justify-center items-end">
    <div className="flex items-end justify-center h-[8rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        
        items={links} />
    </div>
    <div>
    <ModeToggle/>
</div>   
</div> 
</nav>
)

  );
}
