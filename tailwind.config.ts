import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#264653",
        modalColor: "#2A9D8F",
        reduceButtonColor: "#E9C46A",
        buttonsColors: "#F4A261",
        linkColor: "#E76F51",
      },
    },
  },
  plugins: [],
};
export default config;
