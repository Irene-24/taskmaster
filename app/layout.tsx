
import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";

const jakarta =  Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ['latin'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Organize tasks, track project progress, and collaborate effortlessly with this intuitive project management app. Boost productivity with real-time updates and easy-to-use tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} font-sans antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
