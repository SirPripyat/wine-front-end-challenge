import { Button, IconWrapper } from "./IconButtonOutlinedStyles";

interface IconButtonOutlinedProps {
  icon: React.ElementType;
}
export default function IconButtonOutlined({
  icon: Icon,
}: IconButtonOutlinedProps) {
  return (
    <Button>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Button>
  );
}
