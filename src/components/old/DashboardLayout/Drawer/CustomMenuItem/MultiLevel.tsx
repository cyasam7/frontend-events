import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { IOption } from "../Drawer";

import { ICustomMenuItem } from "./CustomMenuItem";
import styles from "./styles";
/**
 * El componente que permite mostrar elementos del menú de forma multinivel, 
 * @param {IOption}item La pantalla a la que se quiere ir
 * @param {boolean}isSelected Indica si ya se seleccionó la opción
 * @param {boolean}isDrawerOpened Indicar si el Drawer está abierto
 * @returns 
 */
const MultiLevel = ({ item, isDrawerOpened }: ICustomMenuItem) => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  const { children } = item;

  const [open, setOpen] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const openModuleTitlePopover = Boolean(anchorEl);

  const handleClick = () => setOpen((prev) => !prev);

  const handlePopoverOpen = (event: any) => setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  const handleRouteNavigation = (child: IOption) => {
    history.push(child.route ?? "/");
    handlePopoverClose();
  };

  return (
    <>
      {isDrawerOpened && (
        <ListItem
          button
          onClick={handleClick}
          sx={styles.listItem}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <ListItemIcon
            sx={styles.listItemIcon}
          >
            {item.iconComponent}
          </ListItemIcon>
          <ListItemText
            primary={item.displayName}
            sx={styles.listItems}
          />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
      )}
      {(!isDrawerOpened && children) && (
        <Collapse in={!isDrawerOpened} unmountOnExit>
          {children?.map((child: any, index: number) => (
            <Link key={`item-${index}`} to={child.route}>
              <ListItem
                button
                sx={{
                  ...styles.listItem,
                  ...(pathname === child.route && styles.selectedBackground),
                }}
                selected={pathname === child.route}
              >
                <ListItemIcon
                  sx={{
                    ...styles.listItemIcon,
                    ...styles.multiItemClosed,
                  }}
                >
                  {child.iconComponent}
                </ListItemIcon>
                <ListItemText
                  primary={child.displayName}
                  sx={{
                    ...styles.listItems,
                    ...styles.multiItemCloseText
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </Collapse>
      )}
      {isDrawerOpened && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children?.map((child: any, index: number) => (
              <Link key={index} to={child.route}>
                <ListItem
                  button
                  sx={{ ...styles.listItem, ...styles.menuItem }}
                  selected={pathname === child.route}
                >
                  {child.iconComponent && (
                    <ListItemIcon
                      sx={styles.listItemIcon}
                    >
                      {child.iconComponent}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={child.displayName}
                    sx={styles.listItems}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      )}

      {!isDrawerOpened && (
        <Popover
          id="mouse-over-popover"
          style={{ marginLeft: ".5rem" }}
          open={openModuleTitlePopover}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <div>
            {children?.map((child: IOption, index: number) => (
              <Typography
                sx={styles.submenuItem}
                key={index}
                onClick={() => handleRouteNavigation(child)}
              >
                {child.displayName}
              </Typography>
            ))}
          </div>
        </Popover>
      )}
    </>
  );
};

export default MultiLevel;
