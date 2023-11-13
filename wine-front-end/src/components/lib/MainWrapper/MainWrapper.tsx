import { MainWrapperStyle } from "./MainWrapperStyles";

interface MainWrapperProps {
  children: React.ReactNode;
}
export default function MainWrapper({ children }: MainWrapperProps) {
  return <MainWrapperStyle>{children}</MainWrapperStyle>;
}
