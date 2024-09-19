import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
			<ul className="flex items-center flex-wrap mb-6 md:mb-0">
			<li>
        		<span className="text-sm font-normal text-gray-500">© {new Date().getFullYear()} <a href="https://brandoriv.dev" className="hover:underline">brandoriv.dev</a>. All rights reserved.</span>
    		</li>
			</ul>
			<div className="flex sm:justify-center space-x-6">
				{/* Mail icon */}
				<a href="mailto:brandoriv.dev@gmail.com" className="text-gray-500 hover:text-gray-900">
					<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12 12.713l-11.2-8.2h22.4L12 12.713zm0 1.574l11.2-8.2v12.5h-22.4v-12.5l11.2 8.2z"/>
					</svg>
				</a>
				{/* LinkedIn */}
					<a href="www.linkedin.com/in/brandoriv" className="text-gray-500 hover:text-gray-900">
					<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M5 3C3.895 3 3 3.895 3 5v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H5zm0 2h14v14H5V5zm2.779 1.316c-.857 0-1.371.515-1.371 1.201 0 .686.514 1.2 1.285 1.2.857 0 1.371-.515 1.371-1.2 0-.686-.514-1.201-1.285-1.201zm-1.303 3.684v7h2.523v-7H6.476zm4.605 0v7h2.523v-3.827c0-1.139.812-1.303 1.056-1.303.244 0 .896.245.896 1.303v3.827h2.442v-3.827c0-2.197-.977-3.173-2.198-3.173-1.221 0-1.872.406-2.197.976v-.977H11.08z" />
					</svg>
				</a>
				{/* Github */}
				<a href="https://github.com/BrandoRiv" className="text-gray-500 hover:text-gray-900">
					<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fillRule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clipRule="evenodd"></path>
					</svg>
				</a>
				{/* Twitter */}
					<a href="https://x.com/BrandoRiv" className="text-gray-500 hover:text-gray-900">
					<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
					</svg>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
