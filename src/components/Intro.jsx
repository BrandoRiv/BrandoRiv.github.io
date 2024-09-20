import React, { useEffect, useState } from "react";

function Intro() {
	const entries = [
		"Web Design.",
		"App development.",
		"Strategy.",
		"Microservices.",
		"Analytics.",
		"& More.",
	];

	const [fadeIns, setFadeIns] = useState(Array(entries.length).fill(false));

	useEffect(() => {
		entries.slice(0, -1).forEach((entry, index) => {
			const randomDelay = Math.random() * 2000;
			setTimeout(() => {
				setFadeIns((prev) => {
					const newFadeIns = [...prev];
					newFadeIns[index] = true;
					return newFadeIns;
				});
			}, randomDelay);
		});

		setTimeout(() => {
			setFadeIns((prev) => {
				const newFadeIns = [...prev];
				newFadeIns[entries.length - 1] = true;
				return newFadeIns;
			});
		}, 2500);
	}, [entries]);

	return (
		<div className="flex flex-col justify-center items-center min-h-screen h-screen space-y-6">
			{entries.map((entry, index) => (
				<div
					key={index}
					className={`text-black text-5xl lg:text-8xl font-bold text-center tracking-wide max-w-[90vw] whitespace-nowrap transition-all duration-1000 transform ${
						fadeIns[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
					} ${entry === "& More." ? "italic" : ""}`}
				>
					{entry}
				</div>
			))}
		</div>
	);
}

export default Intro;
