import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Intro() {
	const animationContainer = useRef(null);

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			path: "src/assets/IntroGradient.json",
		});

		return () => anim.destroy();
	}, []);

	return (
		<div className="flex justify-center items-center min-h-screen h-screen">
			<div>
				<div className="text-white text-6xl lg:text-8xl font-bold text-center tracking-wider">
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
