/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["inter", "serif"],
			},
			backgroundImage: {
				"subtle-gradient": "linear-gradient(to bottom, #FBFAF5, #f0ebe6)",
			},
		},
	},
	plugins: [],
};
