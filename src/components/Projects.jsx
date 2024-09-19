import React from "react";

const items = [
	// Sample data for demonstration
	{ id: 1, content: "Item 1" },
	{ id: 2, content: "Item 2" },
	{ id: 3, content: "Item 3" },
	{ id: 4, content: "Item 4" },
	{ id: 5, content: "Item 5" },
	{ id: 6, content: "Item 6" },
	{ id: 7, content: "Item 7" },
	// Add more items as needed
];

const getRandomSizeClass = () => {
	const heightClasses = ["h-24", "h-32", "h-40"];
	const spanClasses = ["", "col-span-2", "row-span-2"];
	const randomHeight = heightClasses[Math.floor(Math.random() * heightClasses.length)];
	const randomSpan = spanClasses[Math.floor(Math.random() * spanClasses.length)];
	return `${randomHeight} ${randomSpan}`;
};

function RandomSizeGrid() {
	return (
		<div className="flex flex-col h-screen">
			{" "}
			{/* Ensure parent container has height */}
			<h1 className="text-3xl font-bold text-center my-8">Projects</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 py-9 h-full bg-slate-500">
				{items.map((item) => (
					<div
						key={item.id}
						className={`bg-gray-200 p-4 ${getRandomSizeClass()} rounded-lg flex justify-center items-center`}
					>
						{item.content}
					</div>
				))}
			</div>
		</div>
	);
}

export default RandomSizeGrid;
