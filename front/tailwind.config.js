/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			"7xl": ["6rem"],
			"6xl": ["5rem"],
			"5xl": ["4rem"],
			"4xl": ["3rem"],
			"3xl": ["2rem"],
			"2xl": ["1.5rem"],
			xl: ["1.25rem"],
			lg: ["1.1rem"],
			base: ["1rem"],
			sm: [".9rem"],
			xs: [".8rem"],
		},
		extend: {},
	},
	plugins: [],
};
