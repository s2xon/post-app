import React from "react";
import { Button } from "./button";

type props = {
	innerText: string;
};

const NavButton = ({ innerText }: props) => {
	return (
		<Button
			variant="ghost"
			className="text-sm mx-3 h-8 font-normal z-10 text-white shadow-2xl hover:text-white hover:bg-slate-300 bg-opacity-100 hover:bg-opacity-45"
		>
			{innerText}
		</Button>
	);
};

export default NavButton;
