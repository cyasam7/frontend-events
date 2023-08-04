import { LocalizationProvider, DatePicker as MuiDatePicker, DatePickerProps } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { es } from "date-fns/locale";
import React from "react";

type OmitDateProps = Omit<DatePickerProps, 'renderInput'>

interface IDatePickerProps extends OmitDateProps {
  helperText?: string;
  error?: boolean;
  format?: string;
  required?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  style?: React.CSSProperties;
}

const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { error, helperText, format, required, onBlur, style } = props; 
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
      <MuiDatePicker
        {...props}
        toolbarFormat={format ?? 'dd/MM/yyyy'}
        inputFormat={format ?? 'dd/MM/yyyy'}
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
  );
};

export default DatePicker;
