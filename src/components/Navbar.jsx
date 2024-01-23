import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [activeItem, setActiveItem] = useState("");

	useEffect(() => {
		setActiveItem(window.location.hash);

		const handleHashChange = () => {
			setActiveItem(window.location.hash);
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<nav className="fixed top-0 w-full bg-teal-500 p-6">
			<ul className="flex justify-end space-x-4">
				<li className={activeItem === "#intro" ? "underline" : ""}>
					<a href="#home" className="text-white">
						Home
					</a>
				</li>
				<li className={activeItem === "#about" ? "underline" : ""}>
					<a href="#about" className="text-white">
						About
					</a>
				</li>
				<li className={activeItem === "#portfolio" ? "underline" : ""}>
					<a href="#portfolio" className="text-white">
						Portfolio
					</a>
				</li>
				<li className={activeItem === "#contact" ? "underline" : ""}>
					<a href="#contact" className="text-white">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
