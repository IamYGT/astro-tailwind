/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'oklch(0.98 0.02 230)',
                    100: 'oklch(0.97 0.04 250)',
                    200: 'oklch(0.95 0.07 260)',
                    300: 'oklch(0.91 0.10 270)',
                    400: 'oklch(0.86 0.13 280)',
                    500: 'oklch(0.81 0.17 282)',
                    600: 'oklch(0.76 0.18 285)',
                    700: 'oklch(0.71 0.14 290)',
                    800: 'oklch(0.65 0.12 295)',
                    900: 'oklch(0.58 0.08 300)',
                },
            },
        },
    },
    plugins: [],
}; 