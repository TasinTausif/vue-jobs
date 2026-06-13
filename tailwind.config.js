/** @type {import('tailwindcss').Config} */
export default {
    // In documentation it is purge, but in real it is content now. ** refers to all the folders and nested folders recursively and following by another * refers to file extensions
    content: ['./index.html', './src/**/*.{vue,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            // IN the bellow code, we are adding a custom property to the gridTemplateColumns and we are giving it a name of 70/30 and the value is 70% 28% because we want to have a gap of 2% between the two columns
            gridTemplateColumns: {
                '70/30': '70% 28%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
