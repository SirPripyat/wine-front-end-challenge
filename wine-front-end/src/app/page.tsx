"use client";

import Filters from "@/components/Shop/Filters/Filters";
import ProductListWrapper from "@/components/Shop/ProductsList/ProductListWrapper/ProductListWrapper";
import MainWrapper from "@/components/lib/MainWrapper/MainWrapper";
import { FilterAndProductsList } from "@/components/lib/MainWrapper/MainWrapperStyles";

export default function Home() {
  return (
    <MainWrapper>
      <FilterAndProductsList>
        <Filters />
        <ProductListWrapper />
      </FilterAndProductsList>
    </MainWrapper>
  );
}
