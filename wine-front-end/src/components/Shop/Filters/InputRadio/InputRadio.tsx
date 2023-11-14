import { InputWrapper, Label } from "./InputRadioStyles";

interface InputRadioProps {
  label: string;
  value: string;
}
export default function InputRadio({ value, label }: InputRadioProps) {
  return (
    <InputWrapper>
      <input type="radio" name="price" value={value} />
      <Label>{label}</Label>
    </InputWrapper>
  );
}
