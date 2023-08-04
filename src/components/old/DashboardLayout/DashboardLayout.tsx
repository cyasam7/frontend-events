import { Search, NotificationImportant } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { FC, useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ERoles } from "../../pages/routes/role-catalog";
import routes from "../../pages/routes/routes";
import { ILoggedUserReducer } from "../../redux/reducers/LoggedUser";
import { useSelector } from "../../redux/typedHooks";

import Drawer from "./Drawer/Drawer";
import Toolbar from "./Toolbar";

const useStyles = makeStyles((theme: Theme) => ({
  layoutWrapper: {
    /*  textAlign: "center", */
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  drawerContainer: {
    display: "flex",
    flex: 1,
  },
  childrenWrapper: {
    flex: 1,
    display: "flex",
    background: "#F6F8F9 !important",
    flexDirection: "column",
    minHeight: "100vh",
    maxHeight: "100vh",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  childrenHeaderContainer: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    marginTop: 64,
    paddingLeft: 30,
    height: 48,
    // boxShadow: "0px 10px 13px 2px rgba(0,0,0,0.2)", //TODO: Remove this comment in case shadow will be used
  },
  childrenHeaderIconContainer: {
    marginLeft: -10,
  },
  childrenHeaderIcon: {
    color: "#000",
    fontSize: "2rem",
  },
}));

const navbarItems = [
  {
    Option: "Search",
    Icon: <Search sx={{ color: "gray" }} />,
    action: () => console.log("Search"),
  },
  {
    Option: "NotificationImportant",
    Icon: <NotificationImportant sx={{ color: "gray" }} />,
    action: () => console.log("NotificationImportant"),
  },
];
/**
 * El componente que genera todos los elementos básicos para el layout
 *
 */
const DashboardLayout: FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const drawerClose = useMediaQuery(theme.breakpoints.down("md"));
  const {
    loggedUser: { user },
  } = useSelector((store) => store.loggedUser as ILoggedUserReducer);

  const [isOpened, setIsOpened] = useState(
    window.screen.width > theme.breakpoints.values["md"],
  );

  useEffect(() => {
    if (drawerClose) {
      setIsOpened(false);
    }
  }, [drawerClose]);

  const handleDrawer = useCallback(() => {
    setIsOpened(!isOpened);
  }, [setIsOpened, isOpened]);

  if (location.pathname === "/select-account") {
    return <main className={classes.childrenWrapper}>{children}</main>;
  }

  const topItems = routes.filter(
    (route) =>
      route.isMenuItem &&
      !route.isBottom &&
      route.roles.includes(user?.role?.code as ERoles),
  );

  const bottomItems = routes.filter(
    (route) =>
      route.isMenuItem &&
      route.isBottom &&
      route.roles.includes(user?.role?.code as ERoles),
  );

  return (
    <>
      <div className={classes.layoutWrapper}>
        <Toolbar
          isOpened={isOpened}
          handleDrawer={handleDrawer}
          options={navbarItems}
        />

        <div className={classes.drawerContainer}>
          <Drawer
            isOpened={isOpened}
            handleDrawer={handleDrawer}
            items={topItems}
            bottomItems={bottomItems}
          />

          <main className={classes.childrenWrapper}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
