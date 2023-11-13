import { Count, CountGroup, Wrapper } from "./ProductCountStyles";

export default function ProductCount() {
  return (
    <Wrapper>
      <CountGroup>
        <Count>49</Count> produtos encontrados
      </CountGroup>
    </Wrapper>
  );
}
