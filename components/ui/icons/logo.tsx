import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

const AppLogo = ({ className = "", ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      className={cn("w-4 aspect-square", className)}
      fill="currentColor"
      {...props}
    >
      <path d="M59 53h-1V21c0-1.7-1.3-3-3-3h-5V8c0-.1 0-.2-.1-.3v-.1c-.1-.1-.1-.2-.2-.3l-7-7c-.1-.1-.2-.1-.3-.2h-.1c-.1 0-.2-.1-.3-.1H12c-.6 0-1 .4-1 1v17H5c-1.7 0-3 1.3-3 3v32H1c-.6 0-1 .4-1 1v4c0 1.2.8 2 2 2h56c1.2 0 2-.8 2-2v-4c0-.6-.4-1-1-1m-9-29h3v26h-3zM46.6 7H43V3.4zM13 2h28v6c0 .6.4 1 1 1h6v41H13zM7 50V24h4v26zm51 8H2v-3h52v-2H4V21c0-.6.4-1 1-1h6v2H6c-.6 0-1 .4-1 1v28c0 .6.4 1 1 1h48c.6 0 1-.4 1-1V23c0-.6-.4-1-1-1h-4v-2h5c.6 0 1 .4 1 1v33c0 .6.4 1 1 1h1z" />
      <path d="m21 20.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zm-8 11.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zm-8 10.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zM18 5h4v2h-4zm0 4h7v2h-7z" />
    </svg>
  );
};

export default AppLogo;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 60 60"
  xml:space="preserve"
>
  <path d="M59 53h-1V21c0-1.7-1.3-3-3-3h-5V8c0-.1 0-.2-.1-.3v-.1c-.1-.1-.1-.2-.2-.3l-7-7c-.1-.1-.2-.1-.3-.2h-.1c-.1 0-.2-.1-.3-.1H12c-.6 0-1 .4-1 1v17H5c-1.7 0-3 1.3-3 3v32H1c-.6 0-1 .4-1 1v4c0 1.2.8 2 2 2h56c1.2 0 2-.8 2-2v-4c0-.6-.4-1-1-1m-9-29h3v26h-3zM46.6 7H43V3.4zM13 2h28v6c0 .6.4 1 1 1h6v41H13zM7 50V24h4v26zm51 8H2v-3h52v-2H4V21c0-.6.4-1 1-1h6v2H6c-.6 0-1 .4-1 1v28c0 .6.4 1 1 1h48c.6 0 1-.4 1-1V23c0-.6-.4-1-1-1h-4v-2h5c.6 0 1 .4 1 1v33c0 .6.4 1 1 1h1z" />
  <path d="m21 20.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zm-8 11.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zm-8 10.6-1.3-1.3-1.4 1.4 2 2c.2.2.4.3.7.3s.5-.1.7-.3l5-5-1.4-1.4zm8-3.6h4v2h-4zm0 4h14v2H29zM18 5h4v2h-4zm0 4h7v2h-7z" />
</svg>; */
}
