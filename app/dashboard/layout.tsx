"use client";
import AuthProvider from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";
import React, { PropsWithChildren } from "react";

const DBLayout = ({ children }: PropsWithChildren) => {
  const { handleLogout } = useLogout();

  return (
    <AuthProvider>
      <Button onClick={handleLogout}>Fake logout</Button>
      {children}
    </AuthProvider>
  );
};

export default DBLayout;
