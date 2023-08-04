import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { ICustomMenuItem } from "./CustomMenuItem";
import styles from "./styles";
/**
 * Un elemento del menú que sólo tenga un nivel
 *@param {IOption}item La pantalla a la que se quiere ir
 * @param {boolean}isSelected Indica si ya se seleccionó la opción
 * @param {boolean}isDrawerOpened Indicar si el Drawer está abierto
 */
const SingleLevel = ({
  item,
  isSelected,
  isDrawerOpened,
  isBottom,
}: ICustomMenuItem) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event: any) => setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  const openModuleTitlePopover = Boolean(anchorEl);

  return (
    <>
      <Link to={item.route ?? ""}>
        <ListItem
          button
          sx={{
            ...styles.listItem,
            ...(isSelected && styles.selectedBackground),
            ...(!isDrawerOpened && styles.closedIcons),
            color: isBottom ? "#5D5D5D" : "#67BB41",
          }}
          selected={isSelected}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <ListItemIcon
            sx={{
              ...styles.listItemIcon,
              color: isBottom ? "#5D5D5D" : "#67BB41",
            }}
          >
            {item.iconComponent}
          </ListItemIcon>
          <ListItemText
            primary={item.displayName}
            sx={{
              ...styles.listItems,
              ...(!isDrawerOpened && styles.closeText),
            }}
          />
        </ListItem>
      </Link>

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
          <Typography style={{ padding: ".2rem .5rem" }}>
            {item.displayName}
          </Typography>
        </Popover>
      )}
    </>
  );
};

export default SingleLevel;
