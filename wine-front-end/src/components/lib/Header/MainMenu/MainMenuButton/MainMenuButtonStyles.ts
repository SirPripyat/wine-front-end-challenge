import styled from "styled-components";

export const MainMenuButtonWrapper = styled.button`
  height: 100%;

  background-color: transparent;

  border: none;
  border-bottom: 0.2rem solid transparent;

  font-size: 1.8rem;
  color: #555555;

  padding: 3.2rem 0;

  cursor: pointer;

  &:hover {
    color: #d14b8f;

    border-bottom: 0.2rem solid #d14b8f;
  }
`;

export const MainMenuButtonWrapperActive = styled(MainMenuButtonWrapper)`
  color: #d14b8f;

  border-bottom: 0.2rem solid #d14b8f;
`;
