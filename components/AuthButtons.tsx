"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type props = {
  innerText: string;
  authLocation: string;
};


const AuthButtons = ({ authLocation, innerText }: props) => {
  return (
    <Link href={authLocation}>
    <Button
      variant="secondary"
      className="m-2 size-auto w-18 h-18 p-auto relative z-10 text-white bg-[#fff] bg-opacity-25 shadow-md hover:bg-zinc-900 hover:outline-slate-200 "
      >
      {innerText}
    </Button>
      </Link>
  );
};

export default AuthButtons;
