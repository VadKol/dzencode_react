import { FC } from "react";
import { NavItem } from '@components/NavItem';

export const Navbar: FC = () => {
  return (
    <nav>
      <menu>
        <NavItem route={"/orders"} PageTitle={"Orders"} />

        <NavItem route={"/groups"} PageTitle={"Groups"} />

        <NavItem route={"/products"} PageTitle={"Products"} />

        <NavItem route={"/users"} PageTitle={"Users"} />

        <NavItem route={"/settings"} PageTitle={"Settings"} />
      </menu>
    </nav>
  );
};