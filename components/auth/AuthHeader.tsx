import React from "react";

import { FormDescription } from "@/components/ui/form";
import Typography from "@/components/ui/typography";

interface Props {
  title: string;
  desc: string;
}

const AuthHeader = ({ title, desc }: Props) => {
  return (
    <section className="mb-5">
      <Typography className="font-semibold" variant="h6">
        {title}
      </Typography>
      <FormDescription className="text-white">{desc}</FormDescription>
    </section>
  );
};

export default AuthHeader;
