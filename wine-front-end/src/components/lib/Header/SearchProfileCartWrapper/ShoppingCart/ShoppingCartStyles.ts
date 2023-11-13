import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  position: relative;
`;

export const ItemsQuantityWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 2rem;
  height: 2rem;

  background-color: #ffffff;

  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.35);
`;

export const ItemsQuantity = styled.span`
  color: #4fbfa5;

  font-size: 1.6rem;
  font-weight: 700;
`;
