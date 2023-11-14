import { Button } from "@/components/lib/Button";
import { ButtonVariantEnum } from "@/enum/buttonVariant";
import {
  PaginationText,
  PaginationSpanText,
  PaginationMobileWrapper,
  PaginationDesktopWrapper,
  Dots,
  ButtonText,
} from "./PaginationStyles";
import { ChevronsRight } from "lucide-react";

export default function Pagination() {
  return (
    <>
      <PaginationMobileWrapper>
        <Button.Root variant={ButtonVariantEnum.Outlined}>
          Mostrar mais
        </Button.Root>
        <PaginationText>
          Exibindo <PaginationSpanText>8</PaginationSpanText> de{" "}
          <PaginationSpanText>48</PaginationSpanText> produtos no total
        </PaginationText>
      </PaginationMobileWrapper>

      <PaginationDesktopWrapper>
        <Button.Root variant={ButtonVariantEnum.Filled}>1</Button.Root>
        <Button.Root variant={ButtonVariantEnum.Outlined}>2</Button.Root>
        <Button.Root variant={ButtonVariantEnum.Outlined}>3</Button.Root>
        <Dots>...</Dots>
        <ButtonText>
          <Button.Root variant={ButtonVariantEnum.Text}>
            Próximo
            <Button.Icon icon={ChevronsRight} />
          </Button.Root>
        </ButtonText>
      </PaginationDesktopWrapper>
    </>
  );
}
