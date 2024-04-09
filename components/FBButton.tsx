"use client";
import React from "react";
import { Button } from "./ui/button";

const fb_loginURL =
	"https://www.facebook.com/v19.0/dialog/oauth?client_id=377612915252485&redirect_uri=https://localhost:3000/login&state=s&config_id=1528718941025077";

const FBButton = () => {
	function handleClick() {
		window.location.href = fb_loginURL;
	}
	return (
		<Button
			variant="secondary"
			className="relative z-10 text-white bg-[#fff] bg-opacity-25 shadow-2xl"
			onClick={handleClick}
		>
			Join Post
		</Button>
	);
};

export default FBButton;
