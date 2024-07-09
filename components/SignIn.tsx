"use client";
import React, { useState } from "react";
import { signIn } from "../server/middlewear/auth/signin";
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
  email: z.string(),
  password: z.string(),
});

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("pressed");
    const result = await signIn(values);
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

export default SignIn;
