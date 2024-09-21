import React from "react";
import { MailIcon, LinkedInIcon, GithubIcon, TwitterIcon } from "./data/icons.jsx";
import aboutData from "./data/about";

const About = () => {
	const { contact, about, disciplines } = aboutData;

	return (
		<section aria-labelledby="about-section-title">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col items-center lg:items-center">
						{" "}
						{/* Centered on larger screens */}
						<div className="w-full max-w-lg">
							<div className="relative pb-[120%] w-full">
								<img
									alt="Developer portrait"
									src="/src/assets/pfp.JPG"
									className="absolute inset-0 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
						<div className="mt-4 text-center lg:text-center">
							{" "}
							{/* Ensure text is centered */}
							<p className="text-xl lg:text-3xl font-semibold text-center leading-tight">
								{`${contact.name} | `}
								<span className="text-gray-500 italic">{contact.location}</span>
							</p>
							<p className="mt-2 text-lg lg:text-2xl text-gray-500 text-center leading-tight">
								{contact.email}
							</p>
						</div>
						<div className="flex space-x-4 mt-4 justify-center lg:justify-center">
							{" "}
							{/* Icons centered */}
							<a
								href="mailto:brandoriv.dev@gmail.com"
								className="text-gray-500 hover:text-gray-900"
							>
								<MailIcon />
							</a>
							<a href="www.linkedin.com/in/brandoriv" className="text-gray-500 hover:text-gray-900">
								<LinkedInIcon />
							</a>
							<a href="https://github.com/BrandoRiv" className="text-gray-500 hover:text-gray-900">
								<GithubIcon />
							</a>
							<a href="https://x.com/BrandoRiv" className="text-gray-500 hover:text-gray-900">
								<TwitterIcon />
							</a>
						</div>
					</div>

					<div>
						<h2 id="about-section-title" className="text-3xl font-bold sm:text-4xl">
							About Me
						</h2>
						<p className="mt-4 text-gray-600 text-lg">{about}</p>

						<h4 className="mt-6 text-2xl font-bold">Disciplines</h4>
						<div className="mt-2 text-gray-600">
							{disciplines.map((discipline, index) => (
								<p key={index} className="text-base italic">
									{discipline}
								</p>
							))}
						</div>

						<a
							href="/path/to/your/resume.pdf"
							className="inline-block mt-8 text-sm font-bold text-blue-600 italic"
							target="_blank"
							rel="noopener noreferrer"
						>
							Full Resume &rarr;
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
