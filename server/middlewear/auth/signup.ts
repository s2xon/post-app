"use server";
import { FormEvent } from "react";
import { getUser } from "@/server/middlewear/auth/user";

export async function signUp(event: FormEvent<HTMLFormElement>) {
  // Check if user is already a user
  const user = getUser(event);

  // if already user display error already user

  // if not user sign up
  // re direct to dashboard
}
