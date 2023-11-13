import styled from "styled-components";
import { devices } from "@/styles/constants/devices";

export const MainMenuWrapper = styled.nav`
  display: none;

  @media ${devices.lg} {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 4.8rem;

    width: 50%;
  }
`;
