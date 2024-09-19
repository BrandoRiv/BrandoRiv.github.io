import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="w-full bg-zinc-700 text-slate-300 py-5">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<div className="mb-4">
					{" "}
					{/* Adjusted margin for better spacing */}
					<a href="https://example.com" className="mx-2 hover:text-slate-100">
						LinkedIn
					</a>{" "}
					{/* Added hover effect */}
					<a href="https://example.com" className="mx-2 hover:text-slate-100">
						GitHub
					</a>
					<a href="https://example.com" className="mx-2 hover:text-slate-100">
						Twitter
					</a>
				</div>
				<p>&copy; {year} Test change. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
