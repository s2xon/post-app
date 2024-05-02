"use serever";

export async function getUser(formData: FormData) {
  const User = {
    Email: formData.get("email"),
    FirstName: formData.get("firstName"),
    LastName: formData.get("lastName"),
    Password: formData.get("password"),
  };
  return User
}
