import { FilterWrapper, Subtitle, Title, FilterGroup } from "./FiltersStyles";
import InputRadio from "./InputRadio/InputRadio";

export default function Filters() {
  return (
    <FilterWrapper>
      <Title>Refine sua busca</Title>
      <FilterGroup>
        <Subtitle>Por preço</Subtitle>
        <InputRadio label="Até R$40" value="0-40" />
        <InputRadio label="R$40 A R$60" value="40-60" />
        <InputRadio label="R$100 A R$200" value="100-200" />
        <InputRadio label="R$200 A R$500" value="200-500" />
        <InputRadio label="Acima de R$500" value="500+" />
      </FilterGroup>
    </FilterWrapper>
  );
}
