import { styled } from "@mui/material/styles";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
  },
  imageContainer: {
    display: "flex",

    justifyContent: "center",
    width: {
      xs: 0,
      md: "50vw",
    },
    "@media (max-width: 800px)": {
      display: "none",
      height: 0,
    },
    // Media query to handle ipad Pro
    "@media only screen and (width: 1024px) and (height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5)":
      {
        display: "none",
        height: 0,
      },
  },
  cardContainer: {
    display: "flex",
    overflowY: "auto",
    overflowX: "hidden",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF 0% 0% no-repeat padding-box",
    height: "100vh",
    maxHeight: "100vh",
    paddingLeft: {
      xs: "28px",
      md: "0px",
    },
    paddingRight: {
      xs: "28px",
      md: "0px",
    },
    "@media (max-width: 365px)": {
      paddingLeft: "12px",
      paddingRight: "12px",
    },
    "@media only screen and (min-width: 500px) and (max-width: 700px)": {
      justifyContent: "center",
      alignItems: "center",
    },
    "@media only screen and (max-height: 650px) and (max-width: 500)": {
      height: "unset",
    },
  },
  registerContainer: {
    "@media (max-height: 600px) and (max-width: 1280px)": {
      flexDirection: "row",
      flexGrow: 2,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: "#FAFBFC",
      paddingTop: {
        xs: 0,
        lg: "20px",
      },
      paddingBottom: {
        xs: 0,
        lg: "24px",
      },
    },
  },
  privacyWrapper: {
    marginTop: {
      xs: "25px",
      sm: "40px",
    },
    display: "flex",
  } as const,
  privacyText: {
    letterSpacing: "0.4px",
    color: "#5D5D5D",
    borderBottom: "1px solid #5D5D5D",
    paddingBottom: "2px",
    fontSize: "0.75rem",
  },
  separator: {
    fontSize: "0.75rem",
    color: "#5D5D5D",
    margin: "0px 4px",
  },
} as const;

// Interface for the custom image component
interface LogoProps {
  largeScreen?: boolean;
}

// Custom implementation for a img component
export const Logo = styled("img", {
  shouldForwardProp: (prop) => prop !== "largeScreen",
})<LogoProps>(({ largeScreen }) => ({
  width: "300px",
  maxHeight: "13vh",
  marginBottom: "57px",
  "@media (max-height: 700px)": {
    marginBottom: "35px",
    width: "250px",
  },
  "@media (max-height: 600px)": {
    marginBottom: "25px",
    width: "230px",
  },
  ...(largeScreen && {
    "@media (max-height: 850px)": {
      marginTop: "10vh",
    },
    "@media (max-height: 800px)": {
      marginTop: "15vh",
    },
    "@media (max-height: 700px)": {
      marginTop: "35vh !important",
    },
    "@media (max-height: 450px)": {
      marginTop: "120vh !important",
    },
    "@media (max-height: 400px)": {
      marginTop: "145vh !important",
    },
  }),
}));

export const Banner = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100vh",
});

export default styles;
