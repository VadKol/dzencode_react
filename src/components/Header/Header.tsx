import { FC } from "react";
import { TopMenu } from "../TopMenu/TopMenu";

export const Header: FC = () => {
  return (
    <header>
      Logo
      <input
        type="text"
        placeholder="Search product"
      />
      <TopMenu />
    </header>
  );
};