"use client";

import React, { PropsWithChildren } from "react";
import SideNavigation from "./navigation/sidebar/SideNavigation";

const GridLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen grid grid-cols-[var(--small-col),minmax(0,1fr)]">
      <aside className="relative">
        <SideNavigation />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default GridLayout;
