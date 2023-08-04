import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { IconButton, Typography, Box, Button } from "@mui/material";
import { VFC } from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles";

export interface IPageTitle {
  title?: string;
  enableGoBack?: boolean;
  buttonTitle?: string;
  buttonAction?: () => void;
}
/**
 * Componente que genera el titulo y un botón para regresar a la página anterior
 * @param {string} title El titulo de la página
 * @param {boolean} enableGoBack Habilitar el botón para regresar a la página anterior
 * @param {string} butonTitle 
 * @param {()=>void} buttonAction 
 */
const PageTitle: VFC<IPageTitle> = ({
  title,
  enableGoBack,
  buttonTitle,
  buttonAction
}) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Box sx={styles.childrenHeaderContainer}>
        <Box sx={styles.rowWrapper}>
          <Box alignItems="center" display="flex">
            {enableGoBack && (
              <IconButton
                sx={styles.childrenHeaderIconContainer}
                onClick={handleGoBack}
                size="large">
                <ArrowBackIcon sx={styles.childrenHeaderIcon} />
              </IconButton>
            )}
            <Typography variant="subtitle2" sx={styles.title}>{title}</Typography>
          </Box>
          {buttonTitle && (
            <Box sx={styles.buttonWrapper}>
              <Button
                variant="contained"
                title={buttonTitle}
                sx={styles.button}
                onClick={buttonAction}
              >
                {buttonTitle}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PageTitle;
