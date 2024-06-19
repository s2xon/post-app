import { checkUser } from "@/server/middlewear/auth/checkuser";

export default async function page() {
  const authenticated = await checkUser();
  return (
    <div>
      <button>Facebook</button>
    </div>
  );
}
