import React, { useState, useEffect } from "react";

const Navbar = () => {
	const [showNav, setShowNav] = useState(true);
	let hideNavTimeout;

	const handleScroll = () => {
		setShowNav(true);
		clearTimeout(hideNavTimeout);
		hideNavTimeout = setTimeout(() => setShowNav(false), 3000);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(hideNavTimeout);
		};
	}, []);

	return (
		<div
			onMouseEnter={() => setShowNav(true)}
			onMouseLeave={() => setShowNav(false)}
			className={`fixed top-0 w-full ${
				showNav ? "translate-y-0" : "-translate-y-full"
			} transition-transform duration-350 ease-in-out`}
		>
			<nav class="flex items-center justify-end bg-teal-500 p-6">
				{/* Rest of your code */ 78908}
			</nav>
		</div>
	);
};

export default Navbar;
