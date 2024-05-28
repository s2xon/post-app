"use client";
import React from "react";
import { signUp } from "../server/middlewear/auth/signup";
import { useFormStatus } from "react-dom"


const SignUp = () => {
  const { pending } = useFormStatus()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await signUp(formData)
    console.log(response)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        className="border-[1px] border-slate-700"
        type="email"
      />
      <input
        id="firstName"
        name="firstName"
        className="border-[1px] border-slate-700"
        type="text"
      />
      <input
        id="lastName"
        name="lastName"
        className="border-[1px] border-slate-700"
        type="text"
      />
      <input
        id="password"
        name="password"
        className="border-[1px] border-slate-700"
        type="text"
      />

      <input
        disabled={pending}
        id="submit"
        name="submit"
        value="Sign Up"
        className="border-[1px] border-slate-700"
        type="submit"
      />
    </form>
  );
};

export default SignUp;
