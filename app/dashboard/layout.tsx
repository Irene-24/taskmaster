import AuthProvider from "@/components/providers/AuthProvider";
import React, { PropsWithChildren } from "react";

const DBLayout = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default DBLayout;
