// ---Dependencies
// ---UI Dependencies
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputAdornment, IconButton, TextFieldProps } from "@mui/material";
import { memo, ReactElement, useState } from "react";

import { TextInput } from "../Inputs";

/**
 * PasswordFieldEye Component: Extends the original TextField input from material to a Password input that shows or hide the passsword
 * @param {TextFieldProps} props - Material original props
 * @returns {ReactElement}
 */
function PasswordFieldEye(props: TextFieldProps): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const extendedProps: TextFieldProps = {
    ...props,
    type: showPassword ? "text" : "password",
    InputProps: {
      style: { height: 48 },
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    },
  };
  // -----------------------RENDER
  return <TextInput {...(extendedProps as any)} />;
}

export default memo(PasswordFieldEye);
