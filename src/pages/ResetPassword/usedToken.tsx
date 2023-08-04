import { Button, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const UsedToken: React.FC = () => {
  const history = useHistory();

  const handleReturnToLogin = (): void => {
    history.push("/login");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography align="center" component="h1" variant="h5">
        Lo sentimos
      </Typography>
      <br />
      <Typography align="center" component="p" variant="inherit">
        Puede que este proceso ya haya sido completado o el tiempo para
        realizarlo se haya agotado
      </Typography>
      <br />
      <Button onClick={handleReturnToLogin} variant="contained" color="primary">
        Regresar al Inicio de sesión
      </Button>
    </Grid>
  );
};

export default UsedToken;
