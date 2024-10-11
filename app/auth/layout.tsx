import AppLogo from "@/icons/logo";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="auth min-h-screen p-[2%] bg-fixed center relative bg-c1 bg-gradient-to-bl from-c1 to-primary text-white">
      <section className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl w-full max-w-md 6xl:max-w-2xl rounded-2xl p-[4%]  md:p-[2%] ">
        <div className="center ">
          <AppLogo className="scale-50" />
        </div>

        <div className="min-h-[50vh] mt-5">{children}</div>
      </section>
    </main>
  );
};

export default AuthLayout;
