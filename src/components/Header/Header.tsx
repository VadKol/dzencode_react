import { FC } from "react";

import { TopMenu } from "@components/TopMenu";
import { Logo } from "@components/Logo";
import { SessionCounter } from '@components/SessionCounter/SessionCounter'

export const Header: FC = () => {
  return (
    <header>
      <Logo />

      <form>
        <input
          type="text"
          placeholder="Search product"
        />
      </form>

      <div>
        <TopMenu />
        <SessionCounter />
      </div>
    </header>
  );
};