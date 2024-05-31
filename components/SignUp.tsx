"use client";
import React, { useState } from "react";
import { signUp } from "../server/middlewear/auth/signup";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  const [errorMessage, setErrorMessage] = useState("testing testing");
  const [trigger, setTrigger] = useState(false);

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

    if (!result.success) {
      setErrorMessage(result.message);
    } else {
      setErrorMessage("There is still an error");
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh] ">
      <div className="static flex justify-center items-center w-[100vw] h-[100vh]">
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
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      {errorMessage && (
        <Alert
          variant="destructive"
          className="absolute w-[15rem] h-16 top-[50%] left-[50%] transform -translate-x-[-30vw] -translate-y-[-38vh]"
        >
          <AlertCircle className="w-4 h-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default SignUp;
