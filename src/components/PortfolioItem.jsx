import React from "react";

function PortfolioItem({ title, subtitle, image, stack, description, link, github }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image section */}
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      ) : (
        <div className="w-full h-48 bg-gray-400 flex items-center justify-center rounded-lg mb-4">
          <span className="text-white">No Image Available</span>
        </div>
      )}

      {/* Content section */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h3 className="text-md text-gray-700 mb-4">{subtitle}</h3>

      {/* Stack */}
      <div className="flex space-x-2 mb-4">
        {stack.map((tech, index) => (
          <span key={index} className="bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Links */}
      <div className="flex justify-between">
        <a
          href={link}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          href={github}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
