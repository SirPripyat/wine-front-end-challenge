import { ButtonVariantEnum } from "@/enum/buttonVariant";
import React from "react";
import {
  ButtonAdd,
  ButtonFilled,
  ButtonOutlined,
  ButtonText,
} from "./ButtonRootStyle";

interface ButtonRootProps {
  children: React.ReactNode;
  variant: ButtonVariantEnum;
}
export default function ButtonRoot({ children, variant }: ButtonRootProps) {
  return (
    <>
      {variant === ButtonVariantEnum.Filled && (
        <ButtonFilled>{children}</ButtonFilled>
      )}
      {variant === ButtonVariantEnum.Add && <ButtonAdd>{children}</ButtonAdd>}
      {variant === ButtonVariantEnum.Outlined && (
        <ButtonOutlined>{children}</ButtonOutlined>
      )}
      {variant === ButtonVariantEnum.Text && (
        <ButtonText>{children}</ButtonText>
      )}
    </>
  );
}
