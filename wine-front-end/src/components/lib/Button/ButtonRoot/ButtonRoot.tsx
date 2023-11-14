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
  onClick?: () => void;
}
export default function ButtonRoot({
  children,
  variant,
  onClick,
}: ButtonRootProps) {
  return (
    <>
      {variant === ButtonVariantEnum.Filled && (
        <ButtonFilled onClick={onClick}>{children}</ButtonFilled>
      )}
      {variant === ButtonVariantEnum.Add && (
        <ButtonAdd onClick={onClick}>{children}</ButtonAdd>
      )}
      {variant === ButtonVariantEnum.Outlined && (
        <ButtonOutlined onClick={onClick}>{children}</ButtonOutlined>
      )}
      {variant === ButtonVariantEnum.Text && (
        <ButtonText onClick={onClick}>{children}</ButtonText>
      )}
    </>
  );
}
