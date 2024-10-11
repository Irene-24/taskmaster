"use client";

import AppLogo from "@/icons/logo";
import React, { ComponentType, Fragment } from "react";
import Link from "next/link";
import { ExitIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const SmallNav = ({ logout, links = [] }: Props) => {
  return (
    <div className={cn(SIDEBAR_STYLES.wrapper)}>
      <div className={cn(SIDEBAR_STYLES.logo)}>
        <Link href={"/dashboard"} className="center">
          <AppLogo square />
        </Link>
      </div>

      <div className="flex-1 w-full relative mt-8 py-4">
        <div className="absolute inset-0">
          <ScrollArea className="h-full">
            <div className="px-2.5  relative h-full">
              {links.map((section, i) => (
                <Fragment key={i}>
                  <section className="space-y-6 relative">
                    {section.map((link) => {
                      const Icon = link.icon as ComponentType<{
                        width: number;
                        height: number;
                      }>;
                      return (
                        <Link
                          aria-label={link.text}
                          data-test={`${link.text}-sm`}
                          href={link.path}
                          className={SIDEBAR_STYLES.smRowClass}
                          key={link.text}
                        >
                          <Icon width={21} height={21} />
                        </Link>
                      );
                    })}
                  </section>

                  <div
                    className={cn(" -mx-2 my-4 bg-white/25 h-[1px] ", {
                      hidden: i !== 0,
                    })}
                  />
                </Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="basis-[var(--small-col)] w-full mt-2 p-2 border-t border-t-white/25  space-y-2">
        <button
          data-test="logout-sm"
          className={SIDEBAR_STYLES.smRowClass}
          onClick={logout}
          aria-label={"Logout"}
        >
          <ExitIcon width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SmallNav;
