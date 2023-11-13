"use client";

import { HeaderWrapper } from "./HeaderStyles";
import LogoMenuWrapper from "./LogoMenuWrapper/LogoMenuWrapper";
import MainMenu from "./MainMenu/MainMenu";
import SearchProfileCartWrapper from "./SearchProfileCartWrapper/SearchProfileCartWrapper";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoMenuWrapper />
      <MainMenu />
      <SearchProfileCartWrapper />
    </HeaderWrapper>
  );
}
