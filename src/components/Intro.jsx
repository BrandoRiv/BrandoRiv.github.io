function Intro() {
	const titles = ["Full Stack Engineer", "Web Developer", "Software Architect", "UI/UX Enthusiast"];

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<h1 className="text-4xl font-bold mb-3">Brandon Rivera</h1>
			<div className="relative w-full overflow-hidden" style={{ height: "24px" }}>
				{" "}
				<div className="animate-scroll">
					{titles.concat(titles).map((title, index) => (
						<div key={index} className="text-lg leading-tight text-center">
							{title}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Intro;
