"use server";

import { getUser } from "@/server/middlewear/auth/user";

const url = "https:/localhost:8080/signup";

export async function signUp(formData: FormData) {
  const user = getUser(formData);
  const res = await fetch(url, {
    method: "POST",
    cache: "no-cache",

    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}
