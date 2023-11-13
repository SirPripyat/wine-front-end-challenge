import {
  MainMenuButtonWrapper,
  MainMenuButtonWrapperActive,
} from "./MainMenuButtonStyles";

interface MainMenuButtonProps {
  text: string;
  isActived?: boolean;
}
export default function MainMenuButton({
  text,
  isActived,
}: MainMenuButtonProps) {
  return (
    <>
      {isActived && (
        <MainMenuButtonWrapperActive>{text}</MainMenuButtonWrapperActive>
      )}
      {!isActived && <MainMenuButtonWrapper>{text}</MainMenuButtonWrapper>}
    </>
  );
}
