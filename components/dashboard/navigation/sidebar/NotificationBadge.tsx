"use client";
import { cn } from "@/lib/utils";
import { BellIcon } from "@radix-ui/react-icons";
import React, { ComponentProps } from "react";

const NotificationBadge = (props: ComponentProps<typeof BellIcon>) => {
  const count = 2;

  return (
    <span className="relative ">
      <span
        className={cn(
          `absolute  bg-destructive center px-[4px] py-[1px] rounded-full pointer-events-none text-[10px] text-center font-medium -top-2.5 -right-1`
        )}
      >
        {count}
      </span>
      <BellIcon {...props} />
    </span>
  );
};

export default NotificationBadge;
