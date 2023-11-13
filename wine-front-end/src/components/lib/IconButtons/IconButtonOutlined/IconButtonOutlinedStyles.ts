import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;

  cursor: pointer;

  border: 0.2rem solid #555555;
  border-radius: 50%;

  background-color: transparent;
`;

export const IconWrapper = styled.i`
  height: 3.8rem;
  width: 3.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    height: 3.2rem;
    width: 3.2rem;

    color: #555555;
  }
`;
