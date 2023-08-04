import { Typography, Box } from "@mui/material";
import { VFC } from "react";

import styles from "./styles";

interface IFooter {
  path?: string;
}

const Footer: VFC<IFooter> = ({ path }) => {
  const date = new Date().getFullYear();
  return (
    <Box
      sx={{
        ...styles.footer,
        display: "flex",
        padding: "20px",
        // Media query condition to fix footer on the register screen
        ...(path === "/register" && styles.footerLargeScreen),
      }}
    >
      <Typography sx={styles.text}>
        {`Copyright ${date} Angel Hub. All rights reserved.`}
      </Typography>
    </Box>
  );
};

export default Footer;
