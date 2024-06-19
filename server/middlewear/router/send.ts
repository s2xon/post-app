"use server";

import { redirect } from "next/navigation";

export async function send(page: string) {
  redirect(page);
}
