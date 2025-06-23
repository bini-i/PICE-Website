import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        // Define ALL your desired container max-widths here,
        // as you are completely overriding the defaults.
        sm: '1400px',  //375
        md: '1400px',  //768
        lg: '1400px',  //1200
        // xl: '1140px',
        // '2xl': '1320px',
        // '3xl': '1400px', // Add custom ones too
      },
    },

  },
  plugins: [],
};

export default config;
