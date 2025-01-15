/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#1E1E1E",
				white: "#FFFFFF",
				teal: {
					DEFAULT: "#17C3B2",
					300: "#5FE2D4", // Slightly lighter teal for hover
				},
			},
		},
	},
	plugins: [],
};
