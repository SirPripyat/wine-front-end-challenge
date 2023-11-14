import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 1.2rem 2.4rem;

  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.6rem;

  background-color: transparent;
  border: none;

  border-radius: 0.4rem;

  cursor: pointer;
`;

export const ButtonFilled = styled(ButtonWrapper)`
  background-color: #c81a78;
  color: #fff;

  * {
    color: #fff;
  }
`;

export const ButtonAdd = styled(ButtonWrapper)`
  background-color: #7ebc43;
  color: #fff;

  * {
    color: #fff;
  }
`;

export const ButtonOutlined = styled(ButtonWrapper)`
  border: 0.1rem solid #c81a78;
  color: #c81a78;

  * {
    color: #c81a78;
  }
`;

export const ButtonText = styled(ButtonWrapper)`
  color: #111111;

  * {
    color: #111111;
  }
`;
