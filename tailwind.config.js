/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			neutral: {
				900: "#131325",
			},
			primary: {
				500: "#f5deb3",
			},
			danger: {
				500: "#e11d48",
			},
		},
	},
	plugins: [],
};
