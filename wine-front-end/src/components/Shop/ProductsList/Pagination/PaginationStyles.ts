import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const PaginationMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  * {
    width: 100%;
  }

  @media ${devices.lg} {
    display: none;
  }
`;

export const PaginationText = styled.span`
  color: #888;

  text-align: center;
  font-size: 1.8rem;
`;

export const PaginationSpanText = styled.span`
  color: #1d1d1b;
  font-weight: 700;
`;

export const PaginationDesktopWrapper = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    * {
      width: fit;
    }
  }
`;

export const Dots = styled.span`
  color: #b6116e;
  font-size: 1.6rem;
  line-height: 0.9rem;
`;

export const ButtonText = styled.div`
  * {
    color: #b6116e;
  }
`;
