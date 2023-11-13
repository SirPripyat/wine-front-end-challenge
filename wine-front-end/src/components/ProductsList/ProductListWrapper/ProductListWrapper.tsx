import ProductCard from "../ProductCard/ProductCard";
import ProductCount from "../ProductCount/ProductCount";
import { Wrapper } from "./ProductListWrapperStyles";

export default function ProductListWrapper() {
  return (
    <Wrapper>
      <ProductCount />
      {/* <ProductCard /> */}
    </Wrapper>
  );
}
