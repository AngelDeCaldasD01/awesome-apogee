/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			body: ["GetSchwifty", "sans-serif"],
			sans: ["Montserrat Variable"] //letra por defecto de tailwind
		  },
		  colors: {
			'lime-550': "#98c637",
		  }
		},
	  },
	plugins: [],
}
