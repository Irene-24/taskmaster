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
import { useSignUpMutation } from "@/services/authApi";

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters long",
    }),
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const [register, { isLoading }] = useSignUpMutation();

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (values: SchemaType) => {
    toast.dismiss();
    const tId = toast.loading("Creating profile...");

    try {
      await register(values).unwrap();
      toast.dismiss(tId);
      toast.dismiss();
      toast.success("Success", {
        description: `Welcome ${values.firstName}`,
      });

      router.push("/dashboard");
    } catch (error: any) {
      toast.dismiss(tId);
      toast.dismiss();
      toast.error(error?.data?.message || "Unable to process");
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
          title="Hello Friend"
          desc="Sign up, and boost productivity with TaskMaster"
        />

        <section className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className={``}>
                  <FormLabel className={AUTH_STYLES.label}>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn(AUTH_STYLES.input)}
                      placeholder="Jane"
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
              name="lastName"
              render={({ field }) => (
                <FormItem className={``}>
                  <FormLabel className={AUTH_STYLES.label}>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(AUTH_STYLES.input)}
                      placeholder="Dwight"
                      {...field}
                      id={field.name}
                    />
                  </FormControl>

                  <FormMessage className={cn(AUTH_STYLES.error)} />
                </FormItem>
              )}
            />
          </div>

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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className={``}>
                <FormLabel className={AUTH_STYLES.label}>
                  Confirm Password
                </FormLabel>
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
            REGISTER
          </Button>
        </div>

        <p className="text-sm text-end mt-8">
          Already have an account?{" "}
          <Link shallow className="underline text-c1-200" href={`/auth/login`}>
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterPage;
