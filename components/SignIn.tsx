"use client";
import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const url = "https://localhost:8080/signup";

const SignIn = () => {
  const router = useRouter();

  async function onSumbit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });
    if (res.ok) {
      router.push("/");
    } else {
      console.log(res);
    }
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

export default SignIn;
