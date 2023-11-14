import { devices } from "@/styles/constants/devices";
import styled from "styled-components";

export const ProductCardInternalWrapper = styled.div`
  background-color: #fff;

  padding: 1.6rem 0.8rem;

  border-radius: 0.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  text-align: center;

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  @media ${devices.lg} {
    padding: 1.6rem 2.4rem;
  }
`;

export const WineImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const Title = styled.h3`
  color: #111111;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 700;

  @media ${devices.lg} {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const PriceAndDiscount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const Price = styled.small`
  color: #888888;
  font-size: 1rem;
  text-decoration-line: line-through;

  @media ${devices.lg} {
    font-size: 1.2rem;
  }
`;

export const Discount = styled.div`
  background-color: #f79552;

  padding: 0 0.8rem;

  color: #fff;
  font-size: 1.2rem;
  line-height: 1.6rem;

  @media ${devices.lg} {
    font-size: 1.2rem;
  }
`;

export const MemberLabelAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const MemberPriceLabel = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1rem;
  text-transform: uppercase;
  text-align: right;

  @media ${devices.lg} {
    font-size: 1.2rem;
  }
`;

export const MemberPrice = styled.p`
  color: #c81a78;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.8rem;

  display: flex;
  gap: 0.2rem;
  align-items: baseline;

  @media ${devices.lg} {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const DollarSign = styled.span`
  font-size: 1.4rem;
  line-height: 1.4rem;

  @media ${devices.lg} {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`;

export const PriceToNotMembers = styled.span`
  color: #888;

  text-align: center;
  font-size: 1rem;
  line-height: 1.6rem;
  text-transform: uppercase;

  @media ${devices.lg} {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
