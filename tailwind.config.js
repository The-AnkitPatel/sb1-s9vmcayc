/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'gray': {
          700: '#2d2d2d',
          800: '#1a1a1a',
          900: '#121212',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#fff',
              '&:hover': {
                color: '#ccc',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            blockquote: {
              color: '#ddd',
            },
          },
        },
      },
    },
  },
  plugins: [],
}