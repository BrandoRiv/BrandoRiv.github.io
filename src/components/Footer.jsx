import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="flex flex-col items-center justify-center mx-auto py-5 bg-zinc-700 text-slate-300">
			<div className="mb-2">
				{" "}
				{/* Margin bottom to space out links from the footer text */}
				<a href="https://example.com" className="mx-2">
					LinkedIn
				</a>{" "}
				{/* Added horizontal margin */}
				<a href="https://example.com" className="mx-2">
					GitHub
				</a>
				<a href="https://example.com" className="mx-2">
					Twitter
				</a>
			</div>
			<footer>
				<p>&copy; {year} Brandon Rivera. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Footer;
