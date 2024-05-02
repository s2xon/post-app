import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import SignUp from "@/components/SignUp";

const url = "https://localhost:8080";

export default function page() {
  return (
    <main>
      <SignUp />
   </main>
  );
}
