// tailwind.config.js
module.exports = {
  plugins: [require("tailwindcss-dir")()],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f2c015",
          dark: "#dbaa17",
          DEFAULT: "#f0b90b",
        },
        secoundry: {
          light: "#f2c015",
          dark: "#dbaa17",
          DEFAULT: "#1e2026",
        },
        darkMode:"rgb(183, 189, 198) ",
        lighteMode:"#474D57",
        Header: "#181a20",
        bgNavbar: "#1e2026",
        DarkBody: "#161a1e",
        HoverBg: "rgb(30, 35, 41)",
        textRed: " rgb(246, 70, 93)",
        textSuccess: " rgb(14, 203, 129)",
        textWhite: "rgb(234, 236, 239)",
        textGray: "rgb(132, 142, 156)",
        textPurple: "rgba(234, 61, 247, 0.7)",
        textInfo: "rgba(116, 252, 253, 0.7)",
        textBrown: "rgba(241, 156, 56, 0.7)",
        HoverSuvMneu: "#2b3139",
        borderColor: "#252930",
        settingHover: "rgb(35, 40, 45)",
        DarkRed: "rgb(234, 0, 112)",
        DarkGreen: "rgb(116, 167, 0)",
        LightGreen: "rgb(14, 203, 129)",
        LightPink: "rgb(246, 70, 93)",
        NavbarLight: "rgb(255 , 255, 255)",
        footerLight: "#fafafa",
        Link: "#C99400",
        DarkNav: "#3c2601",
        LightNav: "#fef6d8",
        TooltipHover: "#5E6673",
        Gray: "rgb(112, 122, 138)",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        16: "16px",
        20: "20",
      },
      screens: {
        xss: "150px",
        xs: "375px",
        // => @media (min-width: 420px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "780px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      display: ["group-hover"],
      transform: ["hover", "focus", "group-hover"],
      rotate: ["active", "group-hover"],
      float: ["responsive", "direction"],
      margin: ["responsive", "direction"],
      padding: ["responsive", "direction"],
      left: ["responsive", "direction"],
      right: ["responsive", "direction"],
      text: ["responsive", "direction", "focus"],
      borderWidth: ["responsive", "direction", "hover", "focus"],
      border: ["responsive", "direction", "hover", "focus"],
      backgroundColor: ["hover", "focus", "active"],
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active", "focus"],
      visibility: ['hover', 'focus'],
    },
  },
};
