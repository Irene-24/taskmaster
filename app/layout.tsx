import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TaskMaster",
  description:
    "Organize tasks, track project progress, and collaborate effortlessly with this intuitive project management app. Boost productivity with real-time updates and easy-to-use tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${jakarta.variable} ${jakarta.className}`}
    >
      <body suppressHydrationWarning className={`font-sans  antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
