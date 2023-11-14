import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    width: 35%;
  }
`;

export const Title = styled.h4`
  color: #000;

  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Subtitle = styled.h5`
  color: #333;

  font-size: 1.8rem;
  font-weight: 700;
`;
