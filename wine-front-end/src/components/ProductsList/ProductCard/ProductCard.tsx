import { Button } from "@/components/lib/Button";
import { ButtonVariantEnum } from "@/enum/buttonVariant";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  memberPrice: string;
  image: string;
  hasDiscount?: boolean;
  discountPrice?: string;
  price: string;
}
export default function ProductCard({
  title,
  memberPrice,
  hasDiscount,
  discountPrice,
  price,
}: ProductCardProps) {
  return (
    <>
      <div>
        <div>{/* <Image /> */}</div>
        <div>
          <h3>{title}</h3>
          <div>
            <small>{price}</small>
            {hasDiscount && <div>{discountPrice}</div>}
          </div>
          <div>
            <p>SÓCIO WINE</p>
            <p>
              <span>R$</span>
              {memberPrice}
            </p>
            <div>
              <small>NÃO SÓCIO</small>
              <small>R$ {price}</small>
            </div>
          </div>
        </div>
      </div>
      <Button.Root variant={ButtonVariantEnum.Add}>Adicionar</Button.Root>
    </>
  );
}
