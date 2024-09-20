import React from "react";
import aboutData from "./data/about";

const About = () => {
	const { contact, about, disciplines } = aboutData;

	return (
		<section aria-labelledby="about-section-title">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Image and Contact Info Section */}
					<div className="flex flex-col items-center lg:items-start">
						{/* Image Section */}
						<div className="w-full max-w-lg">
							<div className="relative pb-[120%] w-full">
								<img
									alt="Developer portrait"
									src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=800&q=80"
									className="absolute inset-0 w-full h-full object-cover rounded-lg"
								/>
							</div>
						</div>

						{/* Contact Info */}
						<div className="mt-4 text-center lg:text-left">
							<p>{contact.name}</p>
							<p>{contact.location}</p>
							<p>{contact.email}</p>
							<p>{contact.phone}</p>

							{/* Social Media Links (LinkedIn and GitHub icons) */}
							<div className="flex space-x-4 mt-2 justify-center lg:justify-start">
								{/* LinkedIn Icon */}
								<a
									href="https://www.linkedin.com/in/brandoriv"
									className="text-gray-500 hover:text-gray-900"
								>
									<svg
										className="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M5 3C3.895 3 3 3.895 3 5v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H5zm0 2h14v14H5V5zm2.779 1.316c-.857 0-1.371.515-1.371 1.201 0 .686.514 1.2 1.285 1.2.857 0 1.371-.515 1.371-1.2 0-.686-.514-1.201-1.285-1.201zm-1.303 3.684v7h2.523v-7H6.476zm4.605 0v7h2.523v-3.827c0-1.139.812-1.303 1.056-1.303.244 0 .896.245.896 1.303v3.827h2.442v-3.827c0-2.197-.977-3.173-2.198-3.173-1.221 0-1.872.406-2.197.976v-.977H11.08z" />
									</svg>
								</a>

								{/* GitHub Icon */}
								<a
									href="https://github.com/BrandoRiv"
									className="text-gray-500 hover:text-gray-900"
								>
									<svg
										className="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Text Section */}
					<div>
						<h2 id="about-section-title" className="text-3xl font-bold sm:text-4xl">
							About Me
						</h2>
						<p className="mt-4 text-gray-600">{about}</p>

						{/* Disciplines Section */}
						<h4 className="mt-6 text-2xl font-bold">Disciplines</h4>
						<div className="mt-2 text-gray-600">
							{disciplines.map((discipline, index) => (
								<p key={index} className="text-base italic">
									{discipline}
								</p>
							))}
						</div>

						{/* Resume Link */}
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
