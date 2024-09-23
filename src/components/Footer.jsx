import React from "react";
import { MailIcon, LinkedInIcon, GithubIcon, TwitterIcon } from "./data/icons.jsx";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="md:flex md:items-center md:justify-between p-4 md:p-6 xl:p-8 my-6 mx-4">
			<ul className="flex items-center flex-wrap mb-6 md:mb-0">
				<li>
					<a href="#">brandoriv.dev </a>
				</li>
				<li>
					<span className="text-sm font-normal">
						© Brandon Rivera {year}. All rights reserved.
					</span>
				</li>
			</ul>
			<div className="flex sm:justify-center sm:items-center space-x-6">
				{/* Mail icon */}
				<a href="mailto:brandoriv.dev@gmail.com" className=" hover:text-gray-900">
					<MailIcon />
				</a>
				{/* LinkedIn */}
				<a href="www.linkedin.com/in/brandoriv" className="hover:text-gray-900">
					<LinkedInIcon />
				</a>
				{/* Github */}
				<a href="https://github.com/BrandoRiv" className="hover:text-gray-900">
					<GithubIcon />
				</a>
				{/* Twitter */}
				<a href="https://x.com/BrandoRiv" className="hover:text-gray-900">
					<TwitterIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
