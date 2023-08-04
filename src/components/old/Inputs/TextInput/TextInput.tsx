import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import React, { ChangeEvent, FocusEvent } from "react";

const useStyles = makeStyles({
  customTextinput: {
    color: "blue",
    borderRadius: "3px",
  },
  label: {
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  greenCounter: {
    display: "flex",
    width: "100%",
    maxWidth: 430,
    justifyContent: "space-between",
    fontSize: "0.8rem",
    color: "green",
    padding: "0 1rem",
  },
  redCounter: {
    display: "flex",
    width: "100%",
    maxWidth: 430,
    justifyContent: "space-between",
    fontSize: "0.8rem",
    color: "red",
    padding: "0 1rem",
  },
  inputLabel: {
    transform: "translate(14px, -3px) scale(0.75) !important",
  },
});

export interface ITextInputProps extends StandardTextFieldProps {
  customErrorHandler?: boolean;
  hasCharacterCounter?: boolean;
  noDecimalNumbers?: boolean;
  maxNumericalValue?: number;
}

type ChangeEventInput = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
type FocusEventInput = FocusEvent<HTMLTextAreaElement | HTMLInputElement>;

/**
 * Extensión del componente TextField de material ui para uso específico
 * @param {React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> } onChange Funcion que evalúa al cambio
 * @param {React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> } onBlur FUnción que evalúa al mover el cursor de la entrada
 * @param {boolean}customErrorHandler Agregar un manejo de errores unico
 * @param {boolean} hasCharacterCounter Agregar un contador de caracteres
 * @param {boolean}noDecimalNumbers Evitar que se muestren números decimales
 * @param {React.ReactNode}label El contido de la tarjeta
 * @param {unkown} value The value of the input element, required for a controlled component.
 */

const TextInput: React.FC<ITextInputProps> = React.forwardRef((props, ref) => {
  const {
    onChange: TextInputOnChange,
    onBlur: TextInputOnBlur,
    customErrorHandler,
    hasCharacterCounter,
    noDecimalNumbers,
    label,
    value,
    size,
    ...rest
  } = props;

  const classes = useStyles();
  const applyHeight = !rest.multiline && !size;

  const saveChanges = (event: ChangeEventInput): void => {
    if (TextInputOnChange) TextInputOnChange(event);
  };

  const textFieldOnChange = (event: ChangeEventInput): void => {
    if (props.type === "numeric") {
      if (noDecimalNumbers === true) {
        /^(\s*|\d+)$/.test(event.target.value)
          ? saveChanges(event)
          : event.preventDefault();
      } else {
        /^\d*\.?\d*$/.test(event.target.value)
          ? saveChanges(event)
          : event.preventDefault();
      }
    } else {
      saveChanges(event);
    }
  };

  const textFieldOnBlur = (event: FocusEventInput): void => {
    if (TextInputOnBlur) TextInputOnBlur(event);
  };

  return (
    <TextField
      ref={ref}
      value={value}
      label={label}
      onChange={(event) => textFieldOnChange(event)}
      onBlur={(event) => textFieldOnBlur(event)}
      variant="outlined"
      onKeyDown={
        //If input is type numeric ban this chars from being captured
        props.type === "numeric"
          ? (event) =>
              ["e", "E", "+", "-", "ñ"].includes(event.key) &&
              event.preventDefault()
          : () => null
      }
      InputProps={{
        style: { ...(applyHeight && { height: 48 }) },
      }}
      InputLabelProps={{
        style: { ...(applyHeight && { top: "-3.5px" }) },
        classes: { ...(applyHeight && { shrink: classes.inputLabel }) },
      }}
      className={classes.customTextinput}
      {...rest}
    />
  );
});

export default TextInput;
