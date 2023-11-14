import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const MainWrapperStyle = styled.main`
  padding: 0 1.6rem;
  padding-top: 10.9rem;
  padding-bottom: 3.2rem;

  @media ${devices.lg} {
    padding-left: 16rem;
    padding-right: 16rem;
  }
`;

export const FilterAndProductsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

export const BackButtonWrapper = styled.div`
  display: none;

  @media ${devices.lg} {
    display: block;
  }
`;
