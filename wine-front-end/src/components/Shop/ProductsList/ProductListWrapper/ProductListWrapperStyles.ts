import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  width: 100%;

  @media ${devices.lg} {
    width: auto;
  }
`;

export const ProductCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;

  @media ${devices.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
