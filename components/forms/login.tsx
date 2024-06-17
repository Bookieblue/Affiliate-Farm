"use client";
import React from "react";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import TextInput from "../ui/FormField/TextInput/index";
import { useRouter } from "next/navigation";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Incorrect email address"),
  password: z.string().min(8, "Password is required"),
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-4">
        <TextInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="admin@affiliatefarm@gmail.com"
          type="email"
        />
        <TextInput
          control={form.control}
          name="password"
          label="Password"
          placeholder="XXXXXXXXXXX"
          type="password"
        />
        <div className="w-full ">
          <Button type="submit"  className="w-full">Sign in</Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
