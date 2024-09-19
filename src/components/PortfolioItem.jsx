import React from "react";

function PortfolioItem({ title, subtitle, image, stack, description, link }) {
  return (
    <article className="flex bg-white transition hover:shadow-xl">
      {/* Vertical time section */}
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{new Date().getFullYear()}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>Oct 10</span> {/* Replace with dynamic date if necessary */}
        </time>
      </div>

      {/* Left Image Section */}
      <div className="hidden sm:block sm:basis-56">
        <img
          alt={title}
          src={image}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href={link}>
            <h3 className="font-bold uppercase text-gray-900">{title}</h3>
          </a>

          <h6 className="mt-2 text-sm font-medium text-gray-600">{subtitle}</h6>

          {/* Stack */}
          <div className="mt-2">
            {stack.map((item, index) => (
              <span
                key={index}
                className="inline-block text-sm text-gray-600 p-1 lowercase italic"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {description}
          </p>
        </div>

        {/* Call-to-action */}
        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href={link}
            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}

export default PortfolioItem;
