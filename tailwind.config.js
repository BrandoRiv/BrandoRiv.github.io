/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				headline: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
				body: ['"Urbane"', "serif"],
			},
		},
	},
	plugins: [],
};
