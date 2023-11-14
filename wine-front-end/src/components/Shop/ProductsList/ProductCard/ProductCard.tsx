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
  Title,
  WineImageContainer,
} from "./ProductCardStyles";
import Link from "next/link";

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
    <>
      <Link
        href={`wine/${title.toLowerCase()}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          textDecoration: "none",
        }}
      >
        <ProductCardInternalWrapper>
          <WineImageContainer>
            <Image
              src={image}
              alt="Bottle of Wine"
              style={{ width: "auto", maxHeight: "17rem", objectFit: "cover" }}
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
      </Link>
    </>
  );
}
