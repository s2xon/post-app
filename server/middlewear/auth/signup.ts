"use server";

import { z } from "zod";
const url = "https://localhost:8080/signup";

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  displayName: z.string().min(1),
  password: z.string().min(6),
});

export async function signUp(userData: z.infer<typeof formSchema>) {
  const user = userData;
  console.log(userData);

  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.status === 422) {
      return "User already exists.";
    }
    if (!response.ok) {
      return "An error occurred.";
    }
    return "Sign up successful!";
  } catch (error) {
    console.error("error", error);
    return "Network error. Please try again.";
  }
}
