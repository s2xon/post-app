import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import SignIn from "@/components/SignIn";
import Nav from "@/components/Nav";

const url = "https://localhost:8080";

export default function page() {
  return (
    <main>
      <Nav />
      <div className="grid grid-cols-2">
        <div className="h-auto bg-gray-100"></div>
        <div className="flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
