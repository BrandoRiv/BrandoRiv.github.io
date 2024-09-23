import React, { useRef } from "react";
import { MailIcon, LinkedInIcon, GithubIcon, TwitterIcon } from "./data/icons.jsx";
import aboutData from "./data/about";
import { useIsVisible } from "./hooks/useIsVisible";
import pfp from "../assets/pfp.JPG";

const About = () => {
	const { contact, about, aboutdisciplines, interests } = aboutData;

	const imageRef = useRef();
	const contentRef = useRef();

	const isImageVisible = useIsVisible(imageRef);
	const isContentVisible = useIsVisible(contentRef);

	return (
		<section aria-labelledby="about-section-title">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Image section with fade and blur effect */}
					<div
						ref={imageRef}
						className={`flex flex-col items-center lg:items-center transition-opacity duration-500 ease-in-out transform ${
							isImageVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
						}`}
					>
						<div className="w-full max-w-lg">
							<div className="relative pb-[120%] w-full">
								<img
									alt="Developer portrait"
									src={pfp}
									className="absolute inset-0 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>
						<div className="mt-4 text-center lg:text-center">
							<p className="text-xl lg:text-3xl font-semibold text-center leading-tight">
								{`${contact.name} | `}
								<span className="italic">{contact.location}</span>
							</p>
							<p className="mt-2 text-lg lg:text-2xl text-center leading-tight">{contact.email}</p>
						</div>
						<div className="flex space-x-4 mt-4 justify-center lg:justify-center">
							<a href="mailto:brandoriv.dev@gmail.com" className="hover:text-gray-900">
								<MailIcon />
							</a>
							<a href="www.linkedin.com/in/brandoriv" className="hover:text-gray-900">
								<LinkedInIcon />
							</a>
							<a href="https://github.com/BrandoRiv" className="hover:text-gray-900">
								<GithubIcon />
							</a>
							<a href="https://x.com/BrandoRiv" className="hover:text-gray-900">
								<TwitterIcon />
							</a>
						</div>
					</div>

					{/* Content section with fade and blur effect */}
					<div
						ref={contentRef}
						className={`transition-opacity duration-700 ease-in-out transform ${
							isContentVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
						}`}
					>
						<h2 id="about-section-title" className="text-3xl font-bold sm:text-4xl">
							About Me
						</h2>
						<p className="mt-4 text-lg">{about}</p>

						{/* Disciplines and Interests in two-column grid */}
						<div className="mt-6 grid grid-cols-2 gap-8">
							{/* Disciplines */}
							<div>
								<h4 className="text-2xl font-bold">Disciplines</h4>
								<div className="mt-2">
									{aboutdisciplines.map((discipline, index) => (
										<p key={index} className="text-base italic">
											{discipline}
										</p>
									))}
								</div>
							</div>

							{/* Interests aligned to the right */}
							<div>
								<h4 className="text-2xl font-bold">Interests</h4>
								<div className="mt-2">
									{interests.map((interest, index) => (
										<p key={index} className="text-base italic">
											{interest}
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
				</div>
			</div>
		</section>
	);
};

export default About;
