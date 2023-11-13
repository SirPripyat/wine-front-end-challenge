import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;

  width: calc(100% - 3.2rem);

  padding: 1.2rem 1.6rem;

  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.lg} {
    padding: 0 16rem;

    width: calc(100% - 32rem);

    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  }
`;

export const HeaderGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;
