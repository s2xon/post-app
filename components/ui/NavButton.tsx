import React from "react";
import { Button } from "./button";

type props = {
	innerText: string;
};

const NavButton = ({ innerText }: props) => {
	return (
		<Button
		variant="ghost"
			className="text-sm h-8 w-auto mx-4 hover:w-auto font-normal z-10 text-white shadow-2xl hover:text-white hover:bg-slate-300 bg-opacity-100 hover:bg-opacity-45"
		>
			{innerText}
		</Button>
	);
};

export default NavButton;
