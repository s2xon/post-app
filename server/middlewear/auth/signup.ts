"use server";

import { getUser } from "@/server/middlewear/auth/user";

const url = "https://localhost:8080/signup";

export async function signUp(_currentState: unknown, formData: FormData) {
  const user = getUser(formData);

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
