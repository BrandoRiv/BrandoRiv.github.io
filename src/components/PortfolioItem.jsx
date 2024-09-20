import React from "react";

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
	return (
		<article className="group flex flex-col w-full max-w-4xl mx-auto mb-12">
			{/* Image section */}
			<div className="w-full">
				<img
					alt={title}
					src={image ? image : "/img/default-image.jpg"}
					className="h-72 w-full object-cover transition group-hover:grayscale-[50%] rounded-lg"
				/>
			</div>

			{/* Content section */}
			<div className="p-6">
				{/* Title and Date Row */}
				<div className="flex justify-between items-center mb-4">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<h3 className="text-2xl font-medium text-gray-900">{title}</h3>
					</a>
					<div className="text-sm text-gray-600">
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
				<p className="text-lg text-gray-700">{description}</p>

				{/* Optional GitHub link */}
				<div className="flex items-center justify-between mt-4">
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-blue-600 hover:underline"
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
