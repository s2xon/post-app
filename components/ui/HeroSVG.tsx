import React from "react";

const HeroSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 1080"
			className="z-[-10] absolute min-w-[100vw] h-[100vh] left-1/2 top-[50vh] transform -translate-x-1/2 -translate-y-[50vh]"
		>
			<ellipse
				cx="959.5"
				cy="300.5"
				rx="1352.5"
				ry="779.5"
				fill="url(#a)"
			/>
			<defs>
				<linearGradient
					id="a"
					gradientUnits="objectBoundingBox"
					x1="0"
					y1="0"
					x2="1"
					y2="1"
				>
					<stop offset="0" stopColor="#0048B5">
						<animate
							attributeName="stopColor" 
							dur="20s"
							repeatCount="indefinite"
						></animate>
					</stop>
					<stop offset=".5" stopColor="#56BAFF">
						<animate
							attributeName="stopColor"
							dur="20s"
							repeatCount="indefinite"
						></animate>
					</stop>
					<stop offset="1" stopColor="#0064FA">
						<animate
							attributeName="stopColor"
							dur="20s"
							repeatCount="indefinite" 
						></animate>
					</stop>
					<animateTransform
						attributeName="gradientTransform"
						type="rotate"
						from="0 .5 .5"
						to="360 .5 .5"
						dur="20s"
						repeatCount="indefinite"
					/>
				</linearGradient>
				<animateTransform
					attributeName="gradientTransform"
					type="rotate"
					values="360 .5 .5;0 .5 .5"
					className="ignore"
					dur="10s"
					repeatCount="indefinite"
				/>
			</defs>
		</svg>
	);
};

export default HeroSVG;
