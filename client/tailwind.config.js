/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
        marqueeMedium: "marquee 12s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-140%)" },
        },
        marqueeMedium: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      colors: {
        marqueeTextColor: "#6AC2FF",
        topHeaderColor: "#005d13",
        customWhite: "#ffffff", // Light white
        customBlack: "#1a1a1a",
        liveRedColor: "#BB1C00",
        loginColor: "#ffa00c",
        textBlack: "#000000",
        headingHoverColor: "#fef08a",
        textYellowColor: "#ffb80c",
        topGreenBorder: "#198754",
        tableGreenText: "#2da20f",
        logoutBlueColor: "#7E97A7",
        logoutBlueSoftColor: "#D5E1E8",
        tableBoxDarkBlue: "#5ea3d6",
        tableBoxBlue: "#72bbef",
        tableBoxMediumBlue: "#a3d4f7",
        tableBoxLightBlue: "#cceaff",
        tableBoxDarkPink: "#e892a4",
        tableBoxPink: "#faa9ba",
        tableBoxMediumPink: " #fbc2cd",
        tableBoxLightPink: "#fddee5",
        tablePinLogoColor: "#7e97a7",
        tableLogoColor: "#1876B2",
        tableFColor: "#0A92A5",
        tableBlueText: "#0d6efd",
        settingModalColor: "#E0E6E6",
        smallDeviceTabColor: "#212529",
        tablePLogoColor: "#E4550F",
        sliderButtonLightGray: "#F8F9FA", // Softer than gray-50
        sliderButtonMediumGrayOne: "#C8C8D0",
        sliderButtonMediumGray: "#A1A1AA",
        inPlayTabColor: "rgb(36, 58, 72)",
        inPlayBgColor: "#ececec",
      },
      boxShadow: {
        "tittle-shadow": "inset 5px 5px 10px rgba(20, 128, 94, 0.7)",
      },

      backgroundImage: {
        customGradient: "linear-gradient(-180deg, #666666 0%, #333333 100%)",
        customBlack70:
          "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, #000 97%)",
        commonYellowColor: "linear-gradient(180deg, #ffcc2f 8%, #ffb80c 100%)",
        loginRedColor: "linear-gradient(-180deg, #F72424 0%, #BB1C00 100%)",
        signUpColor: "linear-gradient(-180deg, #666666 0%, #333333 100%)",
        oneClickBetColor: "linear-gradient(180deg, #444 13%, #1B1B1B 81%)",
        "footer-gradient": "linear-gradient(-180deg, #152532 0%, #0E1922 90%)",
        "footer-gradient-active":
          "linear-gradient(-180deg, #20435A 0%, #1A2F40 90%)",
      },
    },
  },
  plugins: [],
};
