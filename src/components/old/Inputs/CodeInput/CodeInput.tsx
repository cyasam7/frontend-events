import { Box, TextField } from "@mui/material";
import React, { ChangeEvent, Ref, useRef } from "react";
import useDigitInput, { InputAttributes } from "react-digit-input";

export interface ICodeInputProps {
  value: string;
  onChange: (code: string) => void;
}

const DigitInputElement = React.forwardRef<
  HTMLInputElement,
  Omit<InputAttributes, "ref"> & {
    autoFocus?: boolean;
  }
>(({ ...props }, ref) => {
  return (
    <TextField
      required
      ref={ref}
      sx={{ marginX: "0.2rem" }}
      value={props.value}
      {...props}
      fullWidth
    />
  );
});

const CodeInput: React.FC<ICodeInputProps> = (props) => {
  const { value, onChange } = props;

  const digits = useDigitInput({
    acceptedCharacters: /^[0-9]$/,
    length: 6,
    value,
    onChange,
  });

  return (
    <Box display="flex" justifyContent="space-evenly">
      <DigitInputElement autoFocus {...digits[0]} />
      <DigitInputElement {...digits[1]} />
      <DigitInputElement {...digits[2]} />
      <DigitInputElement {...digits[3]} />
      <DigitInputElement {...digits[4]} />
      <DigitInputElement {...digits[5]} />
    </Box>
  );
};

export default CodeInput;
