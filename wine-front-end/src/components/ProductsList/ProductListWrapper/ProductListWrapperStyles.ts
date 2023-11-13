import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const ProductCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.6rem;
`;
