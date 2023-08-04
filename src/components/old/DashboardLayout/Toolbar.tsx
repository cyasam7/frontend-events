/* eslint-disable react-hooks/exhaustive-deps */
import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import {
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Avatar,
  Box,
} from "@mui/material";
import React, { useState, useCallback, MouseEvent } from "react";
import { useHistory } from "react-router-dom";

import logoRectangle from "../../assets/images/logo-color_negro.png";
import logoSquare from "../../assets/images/onephase-square.png";
import { ERoles } from "../../pages/routes/role-catalog";
import { logoutUser } from "../../redux/actions";
import { ILoggedUserReducer } from "../../redux/reducers/LoggedUser";
import { useDispatch, useSelector } from "../../redux/typedHooks";

import styles from "./styles";

interface IOptions {
  Option: React.ReactNode;
  Icon?: React.ReactNode;
  action?: () => void;
}

interface IToolbar {
  isOpened: boolean;
  handleDrawer: () => void;
  options?: IOptions[];
}
/**
 * Barra de herramientas para el dashboard principal
 * @param {boolean}isOpened Indicar si está desplegado el dashboard
 * @param {()=>void}handleDrawer Indicar que acción tomar cuando se abre el Drawer
 * @param {IOptions}options Indicar las opciones disponibles para la barra de herramientas
 */
const ToolbarComponent: React.FC<IToolbar> = ({
  isOpened,
  handleDrawer,
  options,
}) => {
  const dispatch = useDispatch();
  const {
    loggedUser: { user },
  } = useSelector((store) => store.loggedUser as ILoggedUserReducer);
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [anchorEl, setAnchor] = useState<null | MouseEvent["currentTarget"]>(
    null,
  );

  const handleMenuClose = useCallback(() => {
    setAnchor(null);
  }, [setAnchor]);

  const handleMenuOpen = useCallback(
    (event: MouseEvent) => {
      setAnchor(event.currentTarget);
    },
    [setAnchor],
  );

  const handleLogout = (): void => {
    dispatch(logoutUser());
  };

  const handleGoToProfile = (): void => {
    history.push(
      user.role?.code === ERoles.RL003 ? "/" : "/detalles-inversionista",
    );
    handleMenuClose();
  };

  const renderOptions = useCallback(
    (isMenu?: boolean) => {
      if (options && options.length > 0) {
        return options.map((item, index) => {
          const { Option, Icon, action } = item;
          if (typeof Option === "string") {
            const option = (
              <IconButton
                color="inherit"
                key={`header-option-${index}`}
                onClick={action}
                sx={styles.iconButton}
                size="large"
              >
                {Icon}
                {isMenu && Option}
              </IconButton>
            );
            return isMenu ? (
              <Box sx={styles.iconButton} key={`header-menu${index}`}>
                <MenuItem>{option}</MenuItem>
              </Box>
            ) : (
              <Box key={`option-${index}`} sx={styles.iconButton}>
                {option}
              </Box>
            );
          }
          return (
            <Box key={`header-option-${index}`} sx={styles.iconButton}>
              {Option}
            </Box>
          );
        });
      }
      return null;
    },
    [options],
  );

  const openMenu = Boolean(anchorEl);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters={true} sx={styles.appBar}>
          <Box
            sx={
              isOpened ? styles.toolbarHeaderOpened : styles.toolbarHeaderClosed
            }
          >
            <Box
              component="img"
              src={isOpened ? logoRectangle : logoSquare}
              alt="logo"
              sx={[
                styles.toolbarHeaderLogo,
                isOpened
                  ? styles.toolbarExtendedLogo
                  : styles.toolbarCompressedLogo,
              ]}
            />
          </Box>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawer}
            sx={styles.toolbarIconButton}
            size="large"
          >
            {isOpened ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Box sx={styles.grow} />
          {renderOptions()}
          <Avatar style={{ marginLeft: 10 }} />
          <Box>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              sx={styles.profileDownArrowIcon}
              size="large"
            >
              <KeyboardArrowDownIcon sx={{ color: "gray" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={openMenu}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        {(user.role?.code === ERoles.RL003 ||
          user.role?.code === ERoles.RL004) && (
          <MenuItem onClick={handleGoToProfile}>Mi Perfil</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default ToolbarComponent;
