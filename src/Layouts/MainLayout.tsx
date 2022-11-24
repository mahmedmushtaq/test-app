import { ReactNode } from "react";
import NavBar from "../components/shared/NavBar";

interface IProps {
  children: ReactNode | ReactNode[];
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
