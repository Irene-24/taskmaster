"use client";

import useBoolean from "@/hooks/useBoolean";
import useLogout from "@/hooks/useLogout";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SmallNav from "./SmallNav";
import BigMenu from "./BigMenu";
import {
  StackIcon,
  ArchiveIcon,
  HomeIcon,
  CheckboxIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import NotificationBadge from "./NotificationBadge";

const NAV_LINKS = [
  [
    {
      path: "/",
      text: "Dashboard",
      icon: HomeIcon,
    },
    {
      path: "/",
      text: "Tasks",
      icon: CheckboxIcon,
    },
    {
      path: "/",
      text: "Projects",
      icon: StackIcon,
    },
  ],
  [
    {
      path: "/",
      text: "Settings",
      icon: GearIcon,
    },
    {
      path: "/",
      text: "Notifications",
      icon: NotificationBadge,
    },
    {
      path: "/",
      text: "Archives",
      icon: ArchiveIcon,
    },
  ],
];

const SideMenu = () => {
  const router = useRouter();
  const { handleLogout } = useLogout();

  const { state: isOpen, setFalse, toggle } = useBoolean();

  useEffect(() => {
    setFalse();
  }, [router, setFalse]);

  return (
    <>
      <button
        className="fixed right-0 top-10 pointer-events-auto"
        onClick={toggle}
      >
        Toggle Nav
      </button>
      <nav
        data-test="side-nav"
        className={cn(
          "w-[calc(100%+var(--small-col))] grid grid-cols-[minmax(0,1fr),var(--small-col)] transition-transform text-primary-foreground  h-screen pointer-events-auto bg-primary",
          {
            "-translate-x-[var(--side-col)]": !isOpen,
            "translate-x-0": isOpen,
          }
        )}
      >
        {/* WIDE */}
        <section
          className={cn("transition-opacity", {
            "opacity-100": isOpen,
            "opacity-0": !isOpen,
          })}
        >
          <BigMenu links={NAV_LINKS} logout={handleLogout} />
        </section>

        {/* NARROW */}
        <section
          className={cn(" transition-opacity", {
            "opacity-100": !isOpen,
            "opacity-0": isOpen,
          })}
        >
          <SmallNav links={NAV_LINKS} logout={handleLogout} />
        </section>
      </nav>
    </>
  );
};

export default SideMenu;
