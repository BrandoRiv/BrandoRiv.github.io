import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "./data/portfolio";

function Portfolio() {
	return (
		<div className="flex flex-col items-center px-4 py-10">
			<h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
			<div className="w-full">
				{portfolioData.map((item) => (
					<PortfolioItem
						key={item.id}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						stack={item.stack}
						description={item.description}
						link={item.link}
						github={item.github}
						startDate={item.startDate}
						endDate={item.endDate}
					/>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
