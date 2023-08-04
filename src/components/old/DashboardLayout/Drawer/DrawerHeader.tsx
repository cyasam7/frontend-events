import { Typography, Box } from "@mui/material";
import { VFC } from "react";

import { ILoggedUserReducer } from "../../../redux/reducers/LoggedUser";
import { useSelector } from "../../../redux/typedHooks";
import { capitalizeName } from "../../../utils/helpers/formatting";

import styles from "./styles";

interface IDrawerHeader {
  isOpened: boolean;
}

/**
 * La sección donde aparecen los datos del usuario
 * @param {boolean} isOpened Habilitar la vista de los datos del usuario
 */

const DrawerHeader: VFC<IDrawerHeader> = ({ isOpened }) => {
  const { loggedUser } = useSelector(
    (store) => store.loggedUser as ILoggedUserReducer,
  );

  const {
    user: { firstName, lastName },
  } = loggedUser;

  return (
    <Box sx={styles.wrapper} style={{ display: isOpened ? "inherit" : "none" }}>
      <Box sx={styles.userDataContainer}>
        <Typography
          component="h6"
          variant="subtitle1"
          sx={styles.title}
          title={capitalizeName(String(`${firstName} ${lastName}`))}
        >
          {capitalizeName(String(`${firstName} ${lastName}`))}
        </Typography>
        <Typography title={loggedUser.user.email} sx={styles.email}>
          {loggedUser.user.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerHeader;
