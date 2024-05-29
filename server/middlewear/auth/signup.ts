"use server";

import { getUser } from "@/server/middlewear/auth/user";
import { NextResponse } from "next/server";

const url = "https://localhost:8080/signup";

export async function signUp(_currentState: unknown, formData: FormData) {
  console.log(formData)
  const user = getUser(formData);
  console.log(user)
  const res = await fetch(url, {
    method: "POST",
    cache: "no-cache",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.error_code);
      if (data.error_code === "user_already_exists") {
        return data;
      }
    })
    .catch((error) => {
      console.error("error", error);
    });
}
