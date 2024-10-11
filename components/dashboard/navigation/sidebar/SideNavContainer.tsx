import React, { PropsWithChildren } from "react";

const SideNavContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="overflow-hidden w-[var(--side-col)] z-sideNav fixed left-0 top-0 h-screen pointer-events-none">
      {children}
    </div>
  );
};

export default SideNavContainer;
