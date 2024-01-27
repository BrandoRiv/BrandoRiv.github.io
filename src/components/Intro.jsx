function Intro() {
	const titles = [
		"Full Stack Engineer",
		"Web Developer",
		"Video Game Enjoyer",
		"Software Architect",
		"Tattoo Haver",
		"UI/UX Enthusiast",
		"Home Chef",
		"Food Eater",
		"Dog Person",
	];

	return (
		<div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-8">
			<div className="order-first lg:order-1 md:order-1 sm:order-0 w-64 h-64 md:w-96 md:h-96 bg-gray-400 flex items-center justify-center mb-4 md:mb-0 px-8 aspect-square">
				<span>Photo</span>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-6 w-full max-w-4xl text-center md:text-left">
				<div className="w-full transition-all duration-300">
					<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap">
						Brandon Rivera
					</h1>
					<div className="relative w-full overflow-hidden h-9 align-right fade-scroll pl-2">
						<div className="animate-scroll">
							{titles.concat(titles).map((title, index) => (
								<div
									key={index}
									className="font-thin text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-widest"
								>
									{title}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
