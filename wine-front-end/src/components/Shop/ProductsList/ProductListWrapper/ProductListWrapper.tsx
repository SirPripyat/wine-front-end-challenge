import ProductCard from "../ProductCard/ProductCard";
import ProductCount from "../ProductCount/ProductCount";
import bottleOfWine from "../../../../../public/bottleWineExample.png";
import { ProductCardsGrid, Wrapper } from "./ProductListWrapperStyles";
import Pagination from "../Pagination/Pagination";

export default function ProductListWrapper() {
  const product = {
    title: "Vinho Tinto Português Alento Tinto",
    memberPrice: "29,90",
    hasDiscount: true,
    discountPrice: "15%",
    price: "39,90",
    image: bottleOfWine,
  };

  return (
    <Wrapper>
      <ProductCount />
      <ProductCardsGrid>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductCardsGrid>
      <Pagination />
    </Wrapper>
  );
}
