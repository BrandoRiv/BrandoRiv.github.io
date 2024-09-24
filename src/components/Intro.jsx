import React, { useEffect, useState } from "react";
import aboutData from "./data/about.js"; // Import disciplines

function Intro() {
	// Extract disciplines from aboutData
	const { disciplines } = aboutData;

	const [fadeIns, setFadeIns] = useState(Array(disciplines.length + 2).fill(false)); // One extra for "& More.", and one for brandoriv.dev

	useEffect(() => {
		// Fade in brandoriv.dev first
		setTimeout(() => {
			setFadeIns((prev) => {
				const newFadeIns = [...prev];
				newFadeIns[0] = true; // First index for brandoriv.dev
				return newFadeIns;
			});
		}, 500); // Adjust delay if needed

		// Fade in disciplines
		disciplines.forEach((_, index) => {
			const randomDelay = Math.random() * 2000 + 1000; // Delay after brandoriv.dev
			setTimeout(() => {
				setFadeIns((prev) => {
					const newFadeIns = [...prev];
					newFadeIns[index + 1] = true; // Start from index 1
					return newFadeIns;
				});
			}, randomDelay);
		});

		// Ensure "& More." fades in last, after the last discipline
		const lastDelay = 2500; // Adjust this delay if needed
		setTimeout(() => {
			setFadeIns((prev) => {
				const newFadeIns = [...prev];
				newFadeIns[disciplines.length + 1] = true; // Last index for "& More."
				return newFadeIns;
			});
		}, lastDelay);
	}, [disciplines]);

	return (
		<div className="flex justify-center items-center h-[90vh] w-full mt-10">
			<div className="w-[90vw] lg:w-[60vw] flex flex-col items-center justify-center">
				<h1
					className={`text-left w-full tracking-wider text-4xl lg:text-6xl font-bold transition-all duration-1000 ease-in-out transform 
            ${fadeIns[0] ? "opacity-100 translate-y-0 blur-0" : "opacity-0 -translate-y-5 blur-xs"} mb-2 lg:mb-4`}
				>
					brandoriv.dev
				</h1>
				<div className="w-full text-left tracking-wide p-4 break-words flex flex-wrap items-center justify-start">
					<div className="text-[clamp(1rem,2vw,4rem)] leading-tight sm:leading-snug">
						{disciplines.map((discipline, index) => (
							<span
								key={index}
								className={`inline-block lg:text-4xl transition-all duration-1000 ease-in-out transform 
                ${fadeIns[index + 1] ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-5 blur-xs"} 
                mr-2 sm:mr-1`}
							>
								{discipline.toLowerCase()}.
							</span>
						))}
						<span
							className={`block mt-4 text-3xl italic text-right transition-all duration-1000 ease-in-out transform
              ${fadeIns[disciplines.length + 1] ? "opacity-100 translate-x-0 blur-0" : "opacity-0 -translate-x-5 blur-xs"}`}
						>
							*and more.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
