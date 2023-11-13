"use client";

import ProductListWrapper from "@/components/ProductsList/ProductListWrapper/ProductListWrapper";
import MainWrapper from "@/components/lib/MainWrapper/MainWrapper";

export default function Home() {
  return (
    <MainWrapper>
      <ProductListWrapper />
    </MainWrapper>
  );
}
