import { FormEvent } from "react";

interface user {
  Email: string;
  FirstName: string;
  LastName: string;
  Password: string;
}

export function getUser(event: FormEvent<HTMLFormElement>) {
  const formData = new FormData(event.currentTarget);

  const User: user = {
    Email: formData.get("email") as string,
    FirstName: formData.get("firstName") as string,
    LastName: formData.get("lastName") as string,
    Password: formData.get("password") as string,
  };
  console.log(User)
  return User;
}
