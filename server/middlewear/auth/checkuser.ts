"use server";

import { cookies } from "next/headers";

const url = "https://localhost:8080/checkuser";

export async function checkUser() {
  const cookie = cookies().get("jwt");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cookie),
    });
    const data = response;
    if (response.ok) {
      console.log("worked");
    }
  } catch (error) {
    console.log(error);
  }
}
