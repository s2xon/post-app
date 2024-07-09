"use client";
import React, { useState } from "react";
import { signUp } from "../server/middlewear/auth/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { checkUser } from "@/server/middlewear/auth/checkuser";

import { Button } from "@/components/ui/button";
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

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { authUser } from "@/server/middlewear/auth/user";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { send } from "@/server/middlewear/router/send";

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  displayName: z.string().min(1, {
    message: "Name must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters.",
  }),
});

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      displayName: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await signUp(values);
    if (result) {
      if (result.success) {
        setOpen(false);
        send("/dashboard");
      }
      if (!result.success) {
        setOpen(true);
        setErrorMessage(result.message);
        setTimeout(() => setOpen(false), 3000);
      }
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="static w-46 p-12 flex justify-center items-center border-solid border-2 border-sky-50">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@mail.com" {...field} />
                  </FormControl>
                  <FormDescription>Your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormDescription>Your display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="text-white" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className={"ToastViewport"}>
        {
          <Alert
            variant="destructive"
            className="ToastRoot w-46"
            data-state={open ? `open` : `closed`}
          >
            <AlertCircle className="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        }
      </div>
    </div>
  );
};

export default SignUp;
