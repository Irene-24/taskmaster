import Typography from "@/components/ui/typography";
import AppLogo from "@/icons/logo";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-screen p-[2%] bg-fixed center relative bg-c1 bg-gradient-to-bl from-c1 to-primary text-white">
      <section className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl w-full max-w-md 6xl:max-w-2xl rounded-lg p-[2%] ">
        <header className="center flex-col text-center my-3">
          <AppLogo className="w-10 lg:w-12" />
          <Typography variant="h6">TASKMASTER</Typography>
        </header>

        <div className="min-h-[50vh]">{children}</div>
      </section>
    </main>
  );
};

export default AuthLayout;
