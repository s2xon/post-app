import React from "react";
import NavButton from "./ui/NavButton";
import LogoText from "./ui/LogoText";
import FBButton from "./FBButton";

const Nav = () => {
	return (
		<nav className="min-w-[100vw] min-h-20 flex justify-between items-center border-b border-white border-opacity-25 fixed">
			<LogoText className={"cursor-pointer mx-6 min-h-9 max-h-9 min-w-28 max-w-28"} />
			<div>
				<NavButton innerText="Home"></NavButton>
				<NavButton innerText="Features"></NavButton>
				<NavButton innerText="How it Works"></NavButton>
				<NavButton innerText="Pricing"></NavButton>
			</div>
			<FBButton />
		</nav>
	);
};

export default Nav;
