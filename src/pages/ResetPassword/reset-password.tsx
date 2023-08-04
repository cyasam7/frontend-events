import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { parse } from "query-string";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import LoginLayout from "../../components/LoginLayout";
import ResetPasswordForm from "../../components/ResetPasswordForm";

import { styles } from "./styles";
import UsedToken from "./usedToken";

const ResetPassword: React.FC = () => {
  const [isValidToken, setIsValidToken] = useState(false);
  const [loading, setloading] = useState(true);
  const { token, id } = parse(window.location.search);

  useEffect(() => {
    getAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAccess() {
    try {
      const userToken = await axios.get(`/users/user-self`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!userToken.data.payload.user.accessToken) {
        setIsValidToken(false);
      } else {
        setIsValidToken(true);
      }
    } catch (error) {
      setIsValidToken(false);
    } finally {
      setloading(false);
    }
  }

  if (!token || !id) {
    return <Redirect to="/login" />;
  }

  return (
    <LoginLayout showBanner={false}>
      <Card>
        <CardContent sx={styles.cardContent}>
          {!loading &&
            (isValidToken ? (
              <ResetPasswordForm params={{ token, id }} />
            ) : (
              <UsedToken />
            ))}
        </CardContent>
      </Card>
    </LoginLayout>
  );
};

export default ResetPassword;
