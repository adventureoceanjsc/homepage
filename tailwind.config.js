/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1c448e",
                secondary: "#ed1c24",
                "background-light": "#ffffff",
                "background-dark": "#0f172a",
                "surface-light": "#f3f4f6",
                "surface-dark": "#1e293b",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                sans: ["Inter", "sans-serif"],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
}
