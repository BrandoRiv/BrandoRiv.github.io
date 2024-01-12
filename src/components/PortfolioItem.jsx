import React from "react";
import portfolio from "./data/portfolio";

function PortfolioItem({ title, subtitle, image, stack, description, link }) {
	return (
		<div className="border-2 rounded-md p-3">
			<img
				src={image}
				className="card-img-top"
				alt={title}
			/>
			<div className="card-body">
				<h5 className="font-bold">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
				<h6 className="card-subtitle mb-2 text-muted">
					{stack.map((item, index) => (
						<span
							key={index}
							className="text-base text-gray-600 p-1 lowercase italic"
						>
							{item}
						</span>
					))}
				</h6>
				<p className="font-extralight">{description}</p>
				<a
					href={link}
					className="btn btn-primary underline h-8 w-8"
				>
					Go to {title}
				</a>
			</div>
		</div>
	);
}

export default PortfolioItem;
