import React from "react";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import SignIn from "@/components/SignIn";

const url = "https://localhost:8080";

export default function page() {
  return (
    <main>
      <SignIn />
   </main>
  );
}
