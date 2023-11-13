import MainMenuButton from "./MainMenuButton/MainMenuButton";
import { MainMenuWrapper } from "./MainMenuStyles";

export default function MainMenu() {
  return (
    <MainMenuWrapper>
      <MainMenuButton text="Clube" />
      <MainMenuButton text="Loja" isActived />
      <MainMenuButton text="Produtos" />
      <MainMenuButton text="Ofertas" />
      <MainMenuButton text="Eventos" />
    </MainMenuWrapper>
  );
}
