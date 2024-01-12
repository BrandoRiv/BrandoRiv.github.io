import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{portfolio.map((project) => (
					<PortfolioItem
						key={project.id}
						title={project.title}
						subtitle={project.subtitle}
						image={project.image}
						stack={project.stack}
						description={project.description}
						link={project.link}
						github={project.github}
					/>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
