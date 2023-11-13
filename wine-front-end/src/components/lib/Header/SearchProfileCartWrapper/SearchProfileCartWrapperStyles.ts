import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const SearchCartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media ${devices.lg} {
    display: none;
  }
`;

export const SearchProfileCart = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
`;
