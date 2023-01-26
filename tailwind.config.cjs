/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: "#020101",
                secondaryColor: "#379eff",
                backGroundColor: "#EEF9FF"
            },
            backgroundImage: {
                waterBg: "url(/images/waterBg.jpg)"
            },
            fontFamily: {
                mainFont: ["Plus Jakarta Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
