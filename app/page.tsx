import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSVG from "@/components/ui/HeroSVG";
import LogoText from "@/components/ui/LogoText";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSVG />
      <LogoText className={"h-9 w-auto m-0"}/>
      <Button variant="secondary" className="relative z-10 text-white bg-[#fff] bg-opacity-25 shadow-2xl">Join Post</Button>
    </main>
  );
}
