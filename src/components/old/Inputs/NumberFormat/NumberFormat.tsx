import NumberFormat, { NumberFormatPropsBase } from "react-number-format";

import TextInput, { ITextInputProps } from "../TextInput/TextInput";

type NumberTextFieldProps = Omit<NumberFormatPropsBase, "size"> &
  Omit<ITextInputProps, "value" | "defaultValue" | "ref" | "type">;

const TextFieldMiddleware = (
  params: ITextInputProps & { textFieldSize?: "small" | "medium" },
) => {
  //destructure params to take out textFieldSize
  const { textFieldSize, ...otherParams } = params;
  return <TextInput {...otherParams} size={textFieldSize} />;
};

const NumberFormatInput = (props: NumberTextFieldProps) => {
  const { size, ...otherProps } = props;
  return (
    <NumberFormat
      customInput={TextFieldMiddleware}
      textFieldSize={size}
      {...otherProps}
    />
  );
};

export default NumberFormatInput;
