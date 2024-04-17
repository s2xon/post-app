import React from "react";
import NavButton from "./ui/NavButton";
import LogoText from "./ui/LogoText";
import AuthButtons from "./AuthButtons";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const Nav = () => {
	return (
		<nav className="min-w-[100vw] min-h-20 flex flex-nowrap justify-between items-center border-b border-white border-opacity-25 fixed">
			<LogoText
				className={
					"cursor-pointer mx-6 min-h-9 max-h-9 min-w-28 max-w-28"
				}
			/>
			<div className="hidden lg:block">
				<NavButton innerText="Home"></NavButton>
				<NavButton innerText="Features"></NavButton>
				<NavButton innerText="How it Works"></NavButton>
				<NavButton innerText="Pricing"></NavButton>
			</div>
			<div>
				<AuthButtons innerText="Join" />
				<AuthButtons innerText="Sign in" />
				<Drawer>
					<DrawerTrigger>Open</DrawerTrigger>
					<DrawerContent className="absolute translate-y-[-2000px]">
						<DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Button>Submit</Button>
							<DrawerClose>
								<Button variant="outline">Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</nav>
	);
};

export default Nav;
