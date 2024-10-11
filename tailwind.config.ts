import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "7xs": "250px",
      "6xs": "320px",
      "5xs": "375px",
      "4xs": "390px",
      "3xs": "400px",
      "2xs": "425px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1350px",
      "3xl": "1440px",
      "3.5xl": "1512px",
      "4xl": "1536px",
      "5xl": "1728px",
      "6xl": "1920px",
      print: { raw: "print" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        c1: {
          DEFAULT: "rgba(130, 166, 243, 1)",
        },
        c2: {
          DEFAULT: "rgba(170, 27, 27,1)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      zIndex: {
        headerNav: "10000",
        sideNav: "10100",
        overlay: "10500",
        menu: "10700",
        toggler: "10800",
        modal: "10900",
        notif: "11000",
      },
    },
  },
  plugins: [
    animatePlugin,

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".max-w-unset": {
          "max-width": "unset",
        },
        ".max-h-unset": {
          "max-height": "unset",
        },
        ".h-unset": {
          height: "unset",
        },
        ".w-unset": {
          width: "unset",
        },
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".end": {
          display: "flex",
          "justify-content": "flex-end",
          "align-items": "center",
        },
        ".start": {
          display: "flex",
          "align-items": "center",
          "justify-content": "flex-start",
        },
      });
    }),
  ],
};
export default config;
