import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        'secondary-300': '#8FE9D0',
        'dark-300': '#2E2E2E',
        'dark-500': '#414141',
        'gray-400': '#777777',
        'light': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        Inter: ["Inter", "Inter Fallback"]
      }
    },
  },
  plugins: [],
} satisfies Config;
