import React from "react";

function PortfolioItem({ title, subtitle, image, stack, description, link, github, startDate, endDate, index }) {
  // Determine whether the card should float left or right based on index
  const floatClass = index % 2 === 0 ? 'sm:float-left' : 'sm:float-right';

  return (
    <article className={`flex bg-white rounded-lg transition hover:shadow-xl max-w-2/3 mx-auto ${floatClass} my-4`}>
      {/* Rotated start and end date */}
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={startDate}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{startDate}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{endDate ? endDate : 'Present'}</span>
        </time>
      </div>

      {/* Image section */}
      <div className="hidden sm:block sm:basis-56">
        {image ? (
          <img
            src={image}
            alt={title}
            className="aspect-square h-full w-full object-cover rounded-l-lg"
          />
        ) : (
          <div className="aspect-square h-full w-full bg-gray-400 flex items-center justify-center rounded-l-lg">
            <span className="text-white">No Image</span>
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col justify-between rounded-r-lg">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          </a>
          <h4 className="text-sm text-gray-700">{subtitle}</h4>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">{description}</p>

          {/* Stack */}
          <div className="mt-2">
            <h5 className="font-semibold text-gray-800 mb-1">Tech Stack:</h5>
            <div className="flex space-x-2">
              {stack.map((tech, index) => (
                <span key={index} className="bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="sm:flex sm:items-end sm:justify-end mt-4 space-x-2 p-4">
          {github && (
            <a
              href={github}
              className="block bg-gray-800 px-5 py-2 text-center text-xs font-bold uppercase text-white rounded hover:bg-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {link && (
            <a
              href={link}
              className="block bg-blue-500 px-5 py-2 text-center text-xs font-bold uppercase text-white rounded hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default PortfolioItem;
