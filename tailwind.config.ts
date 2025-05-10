import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem', 
        center: true,
      },
      colors: {
        app: "#65d6f4",
        app_bg: "#1d1b27",
        app_gray: "#b9b8c1",
    },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },  
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        gradient: "gradient 8s linear infinite",
       
      },
      
    },
  },
  
  plugins: [require("tailwindcss-animate"),{
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
},],
};
export default config;
