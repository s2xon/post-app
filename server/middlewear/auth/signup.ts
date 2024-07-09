"use server";

import { authUser } from "@/server/middlewear/auth/user";

import { z } from "zod";
import { cookies } from "next/headers";

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
    if (response.ok) {
      const newUser = authUser(
        data.user.id,
        data.access_token,
        data.refresh_token,
        data.user.email,
        data.user.user_metadata.display_name,
      );
      console.log(newUser);
      cookies().set("jwt", data.access_token, { secure: true });

      return { success: true, message: "Sign up successful!" };
    }
    if (response.status === 422) {
      return { success: false, message: "User already exists." };
    }
    if (!response.ok) {
      return {
        success: false,
        message: "An error occurred, please try again later.",
      };
    }
  } catch (error) {
    console.log("server -");
    console.log(error);
    return {
      success: false,
      message: "An error occurred, please try again later.",
    };
  }
}
