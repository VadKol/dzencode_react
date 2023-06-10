import { FC } from "react";

import { TopMenu } from "@components/TopMenu";
import { Logo } from "@components/Logo";

export const Header: FC = () => {
  return (
    <header>
      <Logo />
      <input
        type="text"
        placeholder="Search product"
      />
      <TopMenu />
    </header>
  );
};