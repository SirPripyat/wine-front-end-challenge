import Image from "next/image";
import shoppingCart from "../../../../../../public/shoppingCart.svg";
import {
  ItemsQuantity,
  ItemsQuantityWrapper,
  ShoppingCartWrapper,
} from "./ShoppingCartStyles";

export default function ShoppingCart() {
  return (
    <ShoppingCartWrapper>
      <Image
        src={shoppingCart}
        alt="Shopping Cart icon"
        width={55}
        height={52}
      />
      <ItemsQuantityWrapper>
        <ItemsQuantity>0</ItemsQuantity>
      </ItemsQuantityWrapper>
    </ShoppingCartWrapper>
  );
}
