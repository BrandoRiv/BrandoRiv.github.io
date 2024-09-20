import React, { useEffect, useState, useRef } from "react";

const Navbar = () => {
	const [activeItem, setActiveItem] = useState(window.location.hash);
	const [underlineStyle, setUnderlineStyle] = useState({});
	const navItemsRef = useRef({});
	const underlineWidth = 50;

	const updateUnderline = (hash) => {
		const item = navItemsRef.current[hash];
		if (item) {
			const itemWidth = item.offsetWidth;
			const leftPosition = item.offsetLeft + (itemWidth - underlineWidth) / 2;
			setUnderlineStyle({
				left: leftPosition,
				width: underlineWidth,
			});
		}
	};

	useEffect(() => {
		updateUnderline(activeItem);

		const handleHashChange = () => {
			const newHash = window.location.hash;
			setActiveItem(newHash);
			updateUnderline(newHash);
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [activeItem]);

	return (
		<nav className="fixed top-0 w-full p-6 z-10 flex items-center justify-between">
			<div className="align-left pl-5">
				<span className="text-xl font-bold italic mix-blend-difference transform sm:rotate-90 sm:origin-left">
					{" "}
					{/* Added rotate-90 for mobile */}
					{"<Brandon Rivera />"}
				</span>
			</div>
			<ul className="flex justify-end space-x-4 md:space-x-6 lg:space-x-8">
				{["#home", "#about", "#projects", "#contact"].map((hash) => (
					<li
						key={hash}
						ref={(el) => (navItemsRef.current[hash] = el)}
						className="text-lg font-medium"
					>
						<a
							href={hash}
							className={`hover:text-teal-500 ${
								activeItem === hash ? "text-teal-500" : "text-gray-700"
							}`}
						>
							{hash.slice(1).charAt(0).toUpperCase() + hash.slice(2)}
						</a>
					</li>
				))}
			</ul>
			<div
				className="absolute bottom-5 h-[2px] bg-gradient-to-r from-transparent via-black to-transparent"
				style={{ ...underlineStyle, transition: "left 0.3s" }}
			/>
		</nav>
	);
};

export default Navbar;
