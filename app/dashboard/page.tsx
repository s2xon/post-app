import { checkUser } from "@/server/middlewear/auth/checkuser";
import { send } from "@/server/middlewear/router/send";

export default async function page() {
  "use server";
  const auth = await checkUser();

  if (auth) {
    if (!auth.success) {
      await send("/");
    }
  }
  ("use client");
  return (
    <div>
      <button>Facebook</button>
    </div>
  );
}
