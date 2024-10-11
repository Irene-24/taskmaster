"use client";
import { ScrollArea } from "@/components/ui/scroll-area";

import AppLogo from "@/icons/logo";
import React, { ComponentType, Fragment } from "react";
import Link from "next/link";
import { ExitIcon } from "@radix-ui/react-icons";
import { SIDEBAR_STYLES } from "@/constants/style";
import { cn } from "@/lib/utils";

interface Props {
  logout: () => void;
  links: {
    path: string;
    text: string;
    icon: ComponentType;
  }[][];
}

const BigMenu = ({ logout, links = [] }: Props) => {
  return (
    <div className={cn(SIDEBAR_STYLES.wrapper)}>
      <div className={cn(SIDEBAR_STYLES.logo)}>
        <Link href={"/dashboard"} className="center p-2">
          <AppLogo />
        </Link>
      </div>

      <div className="flex-1 w-full relative mt-8 py-4">
        <div className="absolute inset-0">
          <ScrollArea className="h-full">
            <div className="px-2.5 relative h-full">
              {links.map((section, i) => (
                <Fragment key={i}>
                  <section className="space-y-5 relative">
                    {section.map((link) => {
                      const Icon = link.icon as ComponentType<{
                        width: number;
                        height: number;
                      }>;
                      return (
                        <Link
                          className={cn(SIDEBAR_STYLES.rowClass)}
                          data-test={`${link.text}-lg`}
                          href={link.path}
                          key={link.text}
                        >
                          <Icon width={18} height={18} />

                          <span className="font-medium ">{link.text}</span>
                        </Link>
                      );
                    })}
                  </section>

                  <div
                    className={cn(" my-4 bg-white/25 h-[1px] ", {
                      hidden: i !== 0,
                    })}
                  />
                </Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="basis-[var(--small-col)] mt-2 w-full p-2 border-t border-t-white/25 space-y-2">
        <button
          data-test="logout-lg"
          className={SIDEBAR_STYLES.rowClass}
          onClick={logout}
        >
          <ExitIcon width={18} height={18} className=" aspect-square" />

          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default BigMenu;
