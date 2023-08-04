import MuiCheckbox, {CheckboxProps} from '@mui/material/Checkbox'
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import React, {CSSProperties} from 'react'

export interface IMultiCheckbox {
  value: boolean
  name: string
}

interface ICheckboxProps extends CheckboxProps {
  label: string
  labelPlacement?: FormControlLabelProps['labelPlacement']
  isMultiCheckbox?: boolean
  checkboxes?: IMultiCheckbox[]
  containerStyle?: CSSProperties;
  labelClassname?: string;
}

const Checkbox: React.FC<ICheckboxProps> = props => {
  const {
    label,
    checked,
    onChange,
    name,
    labelPlacement,
    isMultiCheckbox,
    checkboxes,
    color,
    style,
    containerStyle,
    labelClassname,
    size
  } = props

  const renderMultipleCheckboxes = (): JSX.Element[] | undefined => {
    if (!checkboxes) return

    const checkboxesNames = checkboxes.map(checkbox => checkbox.name)

    const hasDuplicates =
      new Set(checkboxesNames).size !== checkboxesNames.length

    // Checks if exists radio buttons with the property name repeated
    if (hasDuplicates) {
      const duplicatedCheckboxes = checkboxesNames.filter(
        (checkbox, index, self) => self.indexOf(checkbox) !== index,
      )

      console.error(
        'The Checkbox component has checkboxes with the name property repeated: \n',
        duplicatedCheckboxes,
      )

      return
    }

    return checkboxes.map(({value, name}) => (
      <FormControlLabel
        key={name}
        control={
          <MuiCheckbox
            color={color}
            checked={value}
            onChange={onChange}
            name={name}
            style={style}
          />
        }
        label={name}
      />
    ))
  }

  return (
    <FormGroup style={containerStyle}>
      {!isMultiCheckbox ? (
        <FormControlLabel
          control={
            <MuiCheckbox
              checked={checked}
              color={color}
              onChange={onChange}
              name={name}
              style={style}
              size={size}
            />
          }
          className={labelClassname}
          label={label}
          labelPlacement={labelPlacement}
        />
      ) : (
        renderMultipleCheckboxes()
      )}
    </FormGroup>
  )
}

export default Checkbox
