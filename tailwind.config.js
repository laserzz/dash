/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./static/**/*.{html,js,ts}'],
    theme: {
        extend: {
            animation: {
                fade: 'fade 1s ease-in-out'
            }
        },
    },
    plugins: [],
};
