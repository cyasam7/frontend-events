import { LocalizationProvider, TimePicker as MuiTimePicker, TimePickerProps } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { es } from "date-fns/locale";
import React from "react";

type OmitDateProps = Omit<TimePickerProps, 'renderInput'>

interface ITimePickerProps extends OmitDateProps {
  helperText?: string;
  error?: boolean;
  format?: string;
  required?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  style?: React.CSSProperties;
}
/**
 * Un widget que permite escoger la hora y puede ser utilizado en una forma 
 * @param {string} helperText El texto que se muestra dentro de la entrada
 * @param {boolean}error Marcar un error dentro de la entrada en la forma
 * @param {string}format El formato del uso horario 
 * @param {boolean}required Definir si este elemento es requerido dentro de una forma
 * @param {(event: React.FocusEvent<T, Element>) => void}onBlur La función a ejecutar onBlur
 * @param {React.CSSProperties}style El estilo que se le quiere dar al Timepicker
 */
const TimePicker: React.FC<ITimePickerProps> = props => {
  const { error, helperText, format, required, onBlur, style } = props; 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
      <MuiTimePicker
        {...props}
        toolbarFormat={format ?? 'HH:MM'}
        inputFormat={format ?? 'HH:MM'}
        renderInput={(params) => (
          <TextField
            {...params}
            style={style}
            error={error}
            required={required}
            helperText={helperText}
            onBlur={onBlur}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default TimePicker
