import { Button, IconWrapper } from "./IconButtonGhostedStyles";

interface IconButtonGhostedProps {
  icon: React.ElementType;
  onClick?: () => void;
}

export default function IconButtonGhosted({
  icon: Icon,
  onClick,
}: IconButtonGhostedProps) {
  return (
    <Button onClick={onClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Button>
  );
}
