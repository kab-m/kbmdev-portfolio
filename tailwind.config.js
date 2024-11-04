/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        light: {
          bg: {
            primary: "#FFFFFF",
            secondary: "#F6F8FA",
            tertiary: "#F6F8FA",
            quartiary: "#DEE1E5",
            button: "#F6F8FA",
            hover: "#EAEDF0",
          },
          accent: {
            border: "#D1D9E0",
            active: "#FD8C73",
            icon: "#59636E",
            extra: "#0969DA",
            extraBorder: "#0D5EC0",
          },
          text: {
            primary: "#1F2328",
            secondary: "#6B747E",
            link: "#4493F8",
          },
        },
        dark: {
          bg: {
            primary: "#0D1117",
            secondary: "#010409",
            tertiary: "#151B23",
            quartiary: "#15191F",
            button: "#212830",
            hover: "#15191F",
          },
          accent: {
            border: "#2F353D",
            active: "#F78166",
            icon: "#9198A1",
            extra: "#238636",
          },
          text: {
            primary: "#F0F6FC",
            secondary: "#858C95",
            link: "#4493F8",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
