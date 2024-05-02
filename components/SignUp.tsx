"use client";
import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";


const SignUp = () => {
  const router = useRouter();

  async function onSumbit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
 }
  return (
    <form onSubmit={onSumbit}>
      <input id="email" className="border-[1px] border-slate-700" type="text" />
      <input
        id="username"
        className="border-[1px] border-slate-700"
        type="text"
      />
      <input
        id="password"
        className="border-[1px] border-slate-700"
        type="text"
      />
      <input
        id="submit"
        value="Sign Up"
        className="border-[1px] border-slate-700"
        type="submit"
      />
    </form>
  );
};

export default SignUp;
