import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 2rem;

  border-bottom: 0.1rem solid #d5d5d5;

  @media ${devices.lg} {
    border-bottom: none;
  }
`;

export const CountGroup = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #888888;
`;

export const Count = styled.span`
  font-weight: 700;
  color: #1d1d1b;
`;
