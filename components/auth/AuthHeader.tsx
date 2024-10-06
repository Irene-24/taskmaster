import React from "react";

import { FormDescription } from "@/components/ui/form";
import Typography from "@/components/ui/typography";

interface Props {
  title: string;
  desc: string;
}

const AuthHeader = ({ title, desc }: Props) => {
  return (
    <section className="space-y-1.5">
      <Typography className="font-semibold" variant="h6">
        {title}
      </Typography>
      <FormDescription>{desc}</FormDescription>
    </section>
  );
};

export default AuthHeader;
