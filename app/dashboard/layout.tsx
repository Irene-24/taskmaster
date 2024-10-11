import GridLayout from "@/components/dashboard/GridLayout";
import AuthProvider from "@/components/providers/AuthProvider";
import React, { PropsWithChildren } from "react";

const DBLayout = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <GridLayout>{children}</GridLayout>
    </AuthProvider>
  );
};

export default DBLayout;
