import { Search } from "lucide-react";
import IconButtonGhosted from "../../IconButtons/IconButtonGhosted/IconButtonGhosted";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import {
  SearchCartWrapper,
  SearchProfileCart,
} from "./SearchProfileCartWrapperStyles";
import IconButtonOutlined from "../../IconButtons/IconButtonOutlined/IconButtonOutlined";
import Image from "next/image";
import profileIcon from "../../../../../public/profile.svg";

export default function SearchProfileCartWrapper() {
  return (
    <>
      <SearchCartWrapper>
        <IconButtonGhosted icon={Search} />
        <ShoppingCart />
      </SearchCartWrapper>
      <SearchProfileCart>
        <IconButtonOutlined icon={Search} />
        <Image src={profileIcon} alt="Profile" style={{ cursor: "pointer" }} />
        <ShoppingCart />
      </SearchProfileCart>
    </>
  );
}
