/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF7622",
        contentColor: "#98A8B8",
        skipColor: "#646982",
        titleColor: "#32343E",
        unselectedIndicator: "#FFE1CE",
        mainBG: "#121223",
        textFieldBG: "#F0F5FA",
        textFieldPlaceholder: "#A0A5BA",
        rememberMeColor: "#7E8A97",
        facebookColor: "#395998",
        twitterColor: "#1DA1F2",
        appleColor: "#1B1F2F",
        sidebarBG: "#ECF0F4",
        addressFG: "#676767",
        searchBG: "#F6F6F6",
        searchTagBorder: "#EDEDED",
        ingredientsBG: "#FFEBE4",
        cartQuantityBG: "#121223",
        divider: "#E2E2E2",
        logoutBG: "#F2F3F2",
        priceColor: "#7C7C7C",
        crossColor: "#B3B3B3",
        cartBorder: "#F0F0F0"
      },
      fontFamily: {
        "Sen-Regular": ["Sen-Regular"],
        "Sen-Bold": ["Sen-Bold"],
        "Sen-Medium": ["Sen-Medium"],
        "Sen-SemiBold": ["Sen-SemiBold"],
        "Sen-ExtraBold": ["Sen-ExtraBold"],
      },
    },
  },
  plugins: [],
}