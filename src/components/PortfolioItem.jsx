import React, { useRef } from "react";
import { useIsVisible } from "./hooks/useIsVisible";

function PortfolioItem({
	title,
	subtitle,
	image,
	stack,
	description,
	link,
	github,
	startDate,
	endDate,
}) {
	const imageRef = useRef();
	const contentRef = useRef();

	const isImageVisible = useIsVisible(imageRef);
	const isContentVisible = useIsVisible(contentRef);

	return (
		<article className="group flex flex-col w-full max-w-4xl mx-auto mb-12">
			<div
				ref={imageRef}
				className={`w-full transition-opacity duration-500 ease-in-out transform ${
					isImageVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
				}`}
			>
				<img
					alt={title}
					src={image ? image : "/img/default-image.jpg"}
					className="h-72 w-full object-cover transition group-hover:grayscale-[50%] rounded-lg"
				/>
			</div>

			{/* Content section with fade, blur, and delay */}
			<div
				ref={contentRef}
				className={`p-6 transition-opacity duration-700 ease-in-out delay-150 transform ${
					isContentVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
				}`}
			>
				{/* Title and Date Row */}
				<div className="flex justify-between items-center mb-4">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<h3 className="text-2xl font-medium">{title}</h3>
					</a>
					<div className="text-sm">
						<p>{startDate}</p>
						<p>{endDate ? endDate : "Present"}</p>
					</div>
				</div>

				{/* Tech Stack Badges under title */}
				<div className="flex flex-wrap space-x-2 mb-4">
					{stack.map((tech, index) => (
						<span key={index} className="bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm">
							{tech}
						</span>
					))}
				</div>

				{/* Description */}
				<p className="text-base">{description}</p>

				{/* Optional GitHub link */}
				<div className="flex items-center justify-between mt-4">
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block text-sm font-bold text-blue-400 italic"
						>
							GitHub Repo
						</a>
					)}
				</div>
			</div>
		</article>
	);
}

export default PortfolioItem;
