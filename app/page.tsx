import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSVG from "@/components/ui/HeroSVG";
import LogoText from "@/components/ui/LogoText";
import { after } from "node:test";
import FBButton from "@/components/FBButton";
import Nav from "@/components/Nav";

export default function Home() {
	return (
		<main className="overflow-x-">
			<HeroSVG />
			<LogoText className={"h-9 w-auto m-0"} />
			<Nav />
			<FBButton />
		</main>
	);
}
