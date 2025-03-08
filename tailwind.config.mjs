/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#c93434',
                    alt: '#d04545',
                    light: '#e25656',
                    lightest: '#e97878',
                    darker: '#8c2727',
                    rgba: 'rgba(201, 52, 52, 1)',
                    'rgba-2': 'rgba(201, 52, 52, .15)',
                },
                secondary: {
                    DEFAULT: '#d04545',
                    darker: '#0a1c7a',
                },
                tertiary: {
                    DEFAULT: '#e25656',
                    alt: '#c93434',
                    darker: '#150b40',
                },
                pink: {
                    DEFAULT: '#c93434',
                    darker: '#b33674',
                },
                'light-green': {
                    DEFAULT: '#36c6f0',
                    darker: '#2a96bf',
                },
                // Tema renkleri
                heading: '#fff',
                body: '#acacac',
                dark: '#060606',
                darker: 'rgba(6, 6, 6, .7)',
                darkest: 'rgba(0, 0, 0, .3)',
                black: '#000',
                'black-off': 'rgba(0, 0, 0, .2)',
                blacker: 'rgba(15, 15, 17, 0)',
                blackest: '#0f0f11',
                border: 'hsla(0, 0%, 100%, .1)',
                lessdark: '#1e1e1e',
                gray: '#65676b',
                midgray: '#878787',
                light: '#e4e6ea',
                lighter: '#ced0d4',
                lightest: '#f0f2f5',
                white: '#fff',
                'white-off': 'hsla(0, 0%, 100%, .05)',
                // Durum renkleri
                success: '#3eb75e',
                danger: '#ff0003',
                warning: '#ff8f3c',
                info: '#1ba2db',
                // Sosyal medya renkleri
                facebook: '#3b5997',
                twitter: '#1ba1f2',
                youtube: '#ed4141',
                linkedin: '#0077b5',
                pinterest: '#e60022',
                instagram: '#c231a1',
                vimeo: '#00adef',
                twitch: '#6441a3',
                discord: '#7289da',
                // Ekstra renkler
                extra01: '#666',
                extra02: '#606770',
                extra03: '#fbfbfd',
            },
        },
    },
    plugins: [],
}; 