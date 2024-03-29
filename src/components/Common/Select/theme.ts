const theme = {
  primary1: "#51BAF7",
  primary2: "#3CAAEA",
  primary3: "#73C4F3",
  primary4: "#B2E0FB",
  primary5: "#EFF9FF",
  secondary: "#102A43",
  grey1: "#1F2933",
  grey2: "#3E4C59",
  grey3: "#7B8794",
  grey4: "#CDD7E3",
  grey5: "#F0F4F8",
  grey6: "#DCE1E7",
  black: "#000000",
  white: "#FFFFFF",
  success: "#2DCCA7",
  warning: "#F7D070",
  error: "#D64545",

  mobileBreakPoint: {
    SP: `380px`,
    M: `420px`,
    L: `560px`
  },

  // Responsive Breakpoints
  breakPoint: {
    // Phone's portrait mode usually ranges from 360px - 640px
    SM: `640px`,
    MD: `768px`,
    LG: `1024px`,
    XL: `1280px`
  }
} as const;

export { theme };