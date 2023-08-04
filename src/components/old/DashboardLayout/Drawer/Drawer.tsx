import { Drawer, Box, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";
import { useLocation } from "react-router-dom";

import logoRectangle from "../../../assets/images/onephase-rectangle.png";

import CustomMenuItem from "./CustomMenuItem/CustomMenuItem";
import DrawerHeader from "./DrawerHeader";
import styles from "./styles";

const useStyles = makeStyles(() => {
  return {
    drawer: {
      flexShrink: 0,
      height: "100vh",
      whiteSpace: "nowrap",
      backgroundColor: "#fff",
      position: "static",
      border: "none",
      overflow: "hidden",
    },
    closedDrawer: {
      overflowX: "hidden",
      width: 0,
      transition: "width .7s",
    },
    openedDrawer: {
      width: 256,
      transition: "width .7s",
    },
  };
});

export interface IOption {
  displayName: string;
  iconComponent?: ReactElement;
  route?: string;
  children?: IOption[];
}

interface IDrawer {
  isOpened: boolean;
  handleDrawer: () => void;
  items: IOption[];
  bottomItems: IOption[];
}

const DrawerComponent: React.FC<IDrawer> = ({
  isOpened,
  handleDrawer,
  items,
  bottomItems,
}) => {
  const classes = useStyles();
  const pathname = useLocation().pathname;
  const theme = useTheme();
  const drawerVariant = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={styles.drawerMain}>
      <Box sx={styles.drawerWrapper}>
        <Drawer
          variant={drawerVariant ? "temporary" : "permanent"}
          open={isOpened}
          onClose={handleDrawer}
          classes={{
            paper: `${classes.drawer} ${
              isOpened ? classes.openedDrawer : classes.closedDrawer
            }`,
          }}
        >
          {drawerVariant ? (
            <Box sx={styles.drawerHeader}>
              <Box
                component="img"
                src={logoRectangle}
                alt="logo"
                sx={styles.toolbarHeaderLogo}
              />
            </Box>
          ) : (
            <Box sx={styles.toolbar} />
          )}
          <DrawerHeader isOpened={drawerVariant || isOpened} />
          <Box sx={styles.menuItemsContainer}>
            <Box sx={styles.topMenuItems}>
              {items.map((option, index) => (
                <CustomMenuItem
                  key={index}
                  item={option}
                  isSelected={pathname === option.route}
                  isDrawerOpened={isOpened}
                />
              ))}
            </Box>
            <Box sx={styles.bottomMenuItems}>
              {bottomItems.map((bottomOption, index) => (
                <CustomMenuItem
                  isBottom
                  key={index}
                  item={bottomOption}
                  isSelected={pathname === bottomOption.route}
                  isDrawerOpened={isOpened}
                />
              ))}
            </Box>
          </Box>
        </Drawer>
      </Box>
      <Box sx={isOpened ? styles.openedDrawer : styles.closedDrawer} />
    </Box>
  );
};

export default DrawerComponent;
