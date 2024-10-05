import { cn } from "@/lib/utils";
import React, { ComponentProps, ReactNode } from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: ComponentProps<"div">["className"];
  children: ReactNode;
}

const Typography = ({
  variant = "p",
  className = "",
  children,
}: TypographyProps) => {
  const Element = variant || "p";

  const getClassNames = () => {
    switch (variant) {
      case "h1":
        return "text-5xl md:text-6xl font-bold ";
      case "h2":
        return "text-4xl md:text-5xl font-bold ";
      case "h3":
        return "text-3xl md:text-4xl font-bold ";
      case "h4":
        return "text-2xl md:text-3xl font-bold ";
      case "h5":
        return "text-xl xl:text-2xl font-bold ";
      case "h6":
        return "text-lg xl:text-xl font-bold ";
      case "p":
      default:
        return "text-base xl:text-lg ";
    }
  };

  return (
    <Element className={cn(getClassNames(), className)}>{children}</Element>
  );
};

export default Typography;
