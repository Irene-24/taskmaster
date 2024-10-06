"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import Typography from "@/components/ui/typography";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import AuthHeader from "@/components/auth/AuthHeader";

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

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (values: SchemaType) => {
    const tId = toast.loading("Logging you in...");

    toast.dismiss(tId);
    toast.dismiss();
    toast.success("Success", {
      description: "You are logged in",
    });

    console.log({ login: values });

    try {
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
        className="space-y-3"
      >
        <AuthHeader
          title="Welcome Back"
          desc="Sign in to your Taskmaster account"
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={``}>
              <FormLabel className={``}>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  className={``}
                  placeholder="hello@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={``}>
              <FormLabel className={``}>Password</FormLabel>
              <FormControl>
                <PasswordInput className={``} {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          //   disabled={isLoading}
          className=""
          type="submit"
        >
          Sign In
        </Button>

        <p className="text-sm text-center">
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
