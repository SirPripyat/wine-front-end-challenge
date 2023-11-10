"use client";

import { Menu, Search } from "lucide-react";
import styled from "styled-components";
import wineLogo from "../../../../public/wineLogo.svg";
import Image from "next/image";
import shoppingCart from "../../../../public/shoppingCart.svg";

const HeaderTag = styled.header`
  padding: 0.8rem 1.6rem;

  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  items-align: center;
`;

const HeaderGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export default function Header() {
  return (
    <HeaderTag>
      <HeaderGroupWrapper>
        <Menu />
        <Image src={wineLogo} alt="Wine's logo" />
      </HeaderGroupWrapper>
      <HeaderGroupWrapper>
        <Search />
        <Image
          src={shoppingCart}
          alt="Shopping Cart icon"
          width={55}
          height={52}
        />
      </HeaderGroupWrapper>
    </HeaderTag>
  );
}
