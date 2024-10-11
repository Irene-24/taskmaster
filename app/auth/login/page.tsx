"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import AuthHeader from "@/components/auth/AuthHeader";
import { cn } from "@/lib/utils";
import { AUTH_STYLES } from "@/constants/style";
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";
import { useLoginMutation } from "@/services/authApi";

const schema = z.object({
  email: z.string().trim().email({ message: "Email address is required" }),
  password: z.string().trim().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = { email: "", password: "" };

const LoginPage = () => {
  const router = useRouter();

  const { params } = useGetAllSearchParams();

  const [login, { isLoading }] = useLoginMutation();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (values: SchemaType) => {
    toast.dismiss();

    const tId = toast.loading("Logging you in...");

    try {
      await login(values).unwrap();

      toast.dismiss(tId);
      toast.dismiss();
      toast.success("Success", {
        description: "You are logged in",
      });

      let url = "/dashboard";

      if (params?.callbackUrl) {
        url = params.callbackUrl;
      }

      router.push(url);
    } catch (error: any) {
      toast.dismiss(tId);
      toast.dismiss();
      toast.error(error?.data?.message || "Unable to login");
    }
  };

  const handleErrors = (...data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit, handleErrors)}
        className=" [&_input]:placeholder:text-white/30"
      >
        <AuthHeader
          title="Welcome Back"
          desc="Sign in to your TaskMaster account"
        />

        <section className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={``}>
                <FormLabel className={AUTH_STYLES.label}>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    inputMode="email"
                    className={cn(AUTH_STYLES.input)}
                    placeholder="hello@gmail.com"
                    {...field}
                    id={field.name}
                  />
                </FormControl>

                <FormMessage className={cn(AUTH_STYLES.error)} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={``}>
                <FormLabel className={AUTH_STYLES.label}>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Your password"
                    className={cn(AUTH_STYLES.input)}
                    {...field}
                    id={field.name}
                  />
                </FormControl>

                <FormMessage className={cn(AUTH_STYLES.error)} />
              </FormItem>
            )}
          />
        </section>

        <div className="center my-6">
          <Button
            disabled={isLoading}
            className={cn("", AUTH_STYLES.submit, {
              "animate-pulse cursor-not-allowed": isLoading,
            })}
            type="submit"
            rounding={"full"}
          >
            LOG IN
          </Button>
        </div>

        <p className="text-sm text-end mt-8">
          Don{"'"}t have an account?{" "}
          <Link
            shallow
            className="underline text-c1-200"
            href={`/auth/register`}
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginPage;
