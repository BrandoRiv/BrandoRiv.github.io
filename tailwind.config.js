/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{jsx,js}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				inter: ["inter", "serif"],
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-100%)" },
				},
			},
			animation: {
				scroll: "scroll 30s linear infinite",
			},
		},
	},
	plugins: [],
};
