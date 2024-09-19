import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Intro() {
	const animationContainer = useRef(null);

	return (
		<div className="flex justify-center items-center min-h-screen h-screen">
			<div>
				<div className="text-black text-6xl lg:text-8xl font-bold text-center tracking-wider">
					BRANDON
				</div>
				<div className="outline-text text-6xl lg:text-8xl font-bold text-center tracking-wider">
					RIVERA
				</div>
			</div>
		</div>
	);
}

export default Intro;
