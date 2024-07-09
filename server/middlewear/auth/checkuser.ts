"use server";

import { cookies } from "next/headers";

const url = "https://localhost:8080/checkuser";

export async function checkUser() {
  const cookie = cookies().get("jwt");
  const jsonData = { jwt: cookie?.value };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      console.log("worked");

      if (data.code == 200) {
        return { success: true, message: "Is a User." };
      } else {
        return { success: false, message: "Not a User." };
      }
    } else if (!response.ok) {
      console.log("no");
      return { success: false, message: "Not a User" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: error };
  }
}
