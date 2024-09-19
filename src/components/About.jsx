import React from "react";
import aboutData from "./data/about";

const About = () => {
	const { contact, about, skills, disciplines } = aboutData;

	return (
		<section aria-labelledby="about-section-title">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					{/* Image Section */}
					<div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
						<img
							alt="Developer portrait"
							src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
							className="absolute inset-0 h-full w-full object-cover"
						/>
						{/* Contact Info */}
						<div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 text-white p-4">
							<h3 className="font-bold text-lg">{contact.name}</h3>
							<p>{contact.location}</p>
							<p>{contact.email}</p>
							<p>{contact.phone}</p>
							<a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="block text-blue-400">
								LinkedIn
							</a>
							<a href={contact.github} target="_blank" rel="noopener noreferrer" className="block text-blue-400">
								GitHub
							</a>
						</div>
					</div>

					{/* Text Section */}
					<div className="lg:py-24">
						<h2 id="about-section-title" className="text-3xl font-bold sm:text-4xl">About Me</h2>
						<p className="mt-4 text-gray-600">{about}</p>

						{/* Skills Section */}
						<h3 className="mt-6 text-2xl font-bold">Skills</h3>
						<ul className="list-disc pl-5 mt-2 text-gray-600">
							{skills.languages.map((lang, index) => (
								<li key={index}>{lang}</li>
							))}
							{skills.frameworks.map((framework, index) => (
								<li key={index}>{framework}</li>
							))}
							{skills.tools.map((tool, index) => (
								<li key={index}>{tool}</li>
							))}
							{skills.other.map((otherSkill, index) => (
								<li key={index}>{otherSkill}</li>
							))}
						</ul>

						{/* Disciplines Section */}
						<h3 className="mt-6 text-2xl font-bold">Disciplines</h3>
						<ul className="list-disc pl-5 mt-2 text-gray-600">
							{disciplines.map((discipline, index) => (
								<li key={index}>{discipline}</li>
							))}
						</ul>

						{/* Resume Link */}
						<a
							href="/path/to/your/resume.pdf"
							className="inline-block mt-8 px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-lg"
							target="_blank"
							rel="noopener noreferrer"
						>
							View My Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
