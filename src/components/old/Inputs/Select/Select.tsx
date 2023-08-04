import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState, useRef } from "react";

export interface ISelectOption {
  value: string | number;
  name: string;
  disabled?: boolean;
}

interface ISelectProps extends SelectProps {
  labelId?: string;
  label?: string;
  options?: ISelectOption[];
  helperText?: string;
  onOptionNotFound?: CallableFunction;
  error?: boolean;
  customErrorHandler?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/**
 * Componente basado en Select de Material UI
 * @param {string} labelId EL id de un elemento que se comporta como una etiqueta
 * @param {string} label La etiqueta del Select
 * @param {ISelectOption[]} options Las opciones a mostrar dentro del Select
 * @param {string} helperText El texto que aparece cuando hay un error
 * @param {CallableFunction} onOptionNotFound Funcion a llamar si no hay la opción seleccionada
 * @param {boolean} error Indicar si la entrada es un error
 * @param {boolean} customErrorHandler Función para manejar errores
 * @param {boolean} disabled Deshabilitar el select
 * @param {boolean} required Hacer requerido el select dentro de una forma
 * @returns
 */

const Select: React.FC<ISelectProps> = (props) => {
  const {
    labelId,
    label,
    options,
    helperText,
    customErrorHandler,
    onChange: selectOnChange,
    onOptionNotFound: noOptionHandler,
    error: selectError,
    style: selectStyle,
    value,
    disabled,
    required = false,
  } = props;

  const [errorMessage, setErrorMessage] = useState<string>("");
  const selectRef = useRef();

  const handleError = (event: SelectChangeEvent<unknown>): void => {
    if (!event.target.value) {
      setErrorMessage("Necesitas seleccionar al menos una opción");
    } else {
      setErrorMessage("");
    }
  };

  const muiSelectOnChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode,
  ): void => {
    if (selectOnChange) selectOnChange(event, selectRef);
    if (!customErrorHandler) handleError(event);
  };

  const renderHelperText = () => {
    if (!customErrorHandler && !!errorMessage) {
      return <FormHelperText>{errorMessage}</FormHelperText>;
    } else {
      return helperText && <FormHelperText>{helperText}</FormHelperText>;
    }
  };

  const renderOptions = (): JSX.Element[] | undefined => {
    if (!options) return;

    const optionsName = options.map((option) => option.name);
    const hasDuplicates = new Set(optionsName).size !== optionsName.length;

    if (hasDuplicates) {
      const duplicatedOptions = optionsName.filter(
        (option, index, self) => self.indexOf(option) !== index,
      );

      console.error(
        "The Select component has options with the name property repeated: \n",
        duplicatedOptions,
      );

      return;
    }

    return options.map(({ value, name, disabled }) => {
      return (
        <MenuItem key={name} value={value} disabled={disabled}>
          {name}
        </MenuItem>
      );
    });
  };

  //Check if value sent appears in the options provided, if not, select the first options by default
  if (options && options[0] && value !== "") {
    if (!options.find((option) => option["value"] === value)) {
      if (noOptionHandler) noOptionHandler("");
    }
  }

  return (
    <FormControl
      variant={"outlined"}
      style={selectStyle}
      error={selectError || !!errorMessage}
    >
      <InputLabel required={required} htmlFor={labelId}>
        {label}
      </InputLabel>
      <MuiSelect
        {...props}
        ref={selectRef}
        inputProps={{ id: labelId }}
        onChange={muiSelectOnChange}
        label={label}
        disabled={disabled}
        value={value}
      >
        {renderOptions()}
      </MuiSelect>
      {renderHelperText()}
    </FormControl>
  );
};

export default Select;
