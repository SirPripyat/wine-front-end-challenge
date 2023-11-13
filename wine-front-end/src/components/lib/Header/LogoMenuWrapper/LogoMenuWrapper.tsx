import IconButtonGhosted from "../../IconButtons/IconButtonGhosted/IconButtonGhosted";
import { Menu } from "lucide-react";
import Image from "next/image";
import wineLogo from "../../../../../public/wineLogo.svg";
import { HeaderGroupWrapper } from "../HeaderStyles";
import { MenuIcon } from "./LogoMenuWrapperStyles";

export default function LogoMenuWrapper() {
  return (
    <HeaderGroupWrapper>
      <MenuIcon>
        <IconButtonGhosted icon={Menu} />
      </MenuIcon>
      <Image src={wineLogo} alt="Wine's logo" />
    </HeaderGroupWrapper>
  );
}
