import { Button } from "@/components/lib/Button";
import { ButtonVariantEnum } from "@/enum/buttonVariant";
import Image, { StaticImageData } from "next/image";
import {
  Discount,
  DollarSign,
  MemberLabelAndPrice,
  MemberPrice,
  MemberPriceLabel,
  Price,
  PriceAndDiscount,
  PriceToNotMembers,
  ProductCardInternalWrapper,
  ProductCardWrapper,
  Title,
  WineImageContainer,
} from "./ProductCardStyles";

interface ProductCard {
  title: string;
  memberPrice: string;
  image: StaticImageData;
  hasDiscount?: boolean;
  discountPrice?: string;
  price: string;
}

interface ProductCardProps {
  product: ProductCard;
}
export default function ProductCard({
  product: { title, memberPrice, hasDiscount, discountPrice, price, image },
}: ProductCardProps) {
  return (
    <ProductCardWrapper>
      <ProductCardInternalWrapper>
        <WineImageContainer>
          <Image
            src={image}
            alt="Bottle of Wine"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </WineImageContainer>
        <Title>{title}</Title>
        <PriceAndDiscount>
          <Price>R$ {price}</Price>
          {hasDiscount && <Discount>{discountPrice} OFF</Discount>}
        </PriceAndDiscount>
        <MemberLabelAndPrice>
          <MemberPriceLabel>
            SÓCIO <br /> WINE
          </MemberPriceLabel>
          <MemberPrice>
            <DollarSign>R$</DollarSign>
            {memberPrice}
          </MemberPrice>
        </MemberLabelAndPrice>
        <PriceToNotMembers>NÃO SÓCIO R$ {price}</PriceToNotMembers>
      </ProductCardInternalWrapper>
      <Button.Root variant={ButtonVariantEnum.Add}>Adicionar</Button.Root>
    </ProductCardWrapper>
  );
}
