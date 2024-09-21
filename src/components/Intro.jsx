import React, { useEffect, useState } from "react";

function Intro() {
	const entries = [
		"Web Design",
		"App Development",
		"Strategy",
		"Microservices",
		"Analytics",
		"Full-Stack Development",
		"Cloud Solutions",
		"Agile Project Management",
		"Data Management",
	];

	const [fadeIns, setFadeIns] = useState(Array(entries.length).fill(false));

	useEffect(() => {
		entries.forEach((entry, index) => {
			const randomDelay = Math.random() * 2000;
			setTimeout(() => {
				setFadeIns((prev) => {
					const newFadeIns = [...prev];
					newFadeIns[index] = true;
					return newFadeIns;
				});
			}, randomDelay);
		});
	}, [entries]);

	return (
		<div className="flex justify-center items-center h-screen">
			{/* Parent div fills the screen */}
			<div className="flex flex-col justify-center items-center w-full max-w-screen-xl h-[90vh] bg-slate-500 px-12 py-16 lg:py-24 rounded-lg">
				{/* Text Block with justified alignment */}
				<div className="max-w-[30em] text-justify text-black text-2xl lg:text-4xl font-bold tracking-wide leading-relaxed">
					{entries.map((entry, index) => (
						<span
							key={index}
							className={`transition-all duration-1000 inline-block 
								${fadeIns[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
						>
							{entry}.
						</span>
					))}
					{/* "& More." appears last */}
					<span className="block mt-4 text-black text-2xl lg:text-4xl italic">& More.</span>
				</div>
			</div>
		</div>
	);
}

export default Intro;
