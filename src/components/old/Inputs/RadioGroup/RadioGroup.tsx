import {
  Radio,
  RadioProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from "@mui/material";
import MuiRadioGroup, {RadioGroupProps} from '@mui/material/RadioGroup';
import React, {CSSProperties} from 'react';

export interface IRadioButton {
  name: string
  value: string | number
}

interface IRadioGroupProps extends RadioGroupProps {
  radioButtons: IRadioButton[]
  formLabel?: string
  error?: boolean
  helperText?: string
  row?: boolean
  color?: RadioProps['color']
  containerStyles?: CSSProperties
}

const RadioGroup: React.FC<IRadioGroupProps> = props => {
  const {
    onChange: radioGroupOnChange,
    value: radioGroupValue,
    row,
    radioButtons,
    helperText,
    formLabel,
    error,
    style,
    color,
  } = props

  const renderRadioButtons = (): JSX.Element[] | undefined => {
    const radioButtonsNames = radioButtons.map(radiobutton => radiobutton.name)

    const hasDuplicates =
      new Set(radioButtonsNames).size !== radioButtonsNames.length

    // Checks if exists radio buttons with the property name repeated
    if (hasDuplicates) {
      const duplicatedRadioButttons = radioButtonsNames.filter(
        (radiobutton, index, self) => self.indexOf(radiobutton) !== index,
      )

      console.error(
        'The RadioGroup component has radiobuttons with the name property repeated: \n',
        duplicatedRadioButttons,
      )

      return
    }

    return radioButtons.map(({value, name}) => (
      <FormControlLabel
        key={value + name}
        value={value}
        control={<Radio color={color} style={style} />}
        label={name}
      />
    ))
  }

  return (
    <FormControl component="fieldset" error={error}>
      {formLabel && <FormLabel component="legend">{formLabel}</FormLabel>}
      <MuiRadioGroup
        value={radioGroupValue}
        onChange={radioGroupOnChange}
        row={row}
      >
        {renderRadioButtons()}
      </MuiRadioGroup>
      {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default RadioGroup
