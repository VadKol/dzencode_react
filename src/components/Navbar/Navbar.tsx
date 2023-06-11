import { FC } from "react";

import { NavItem } from '@components/NavItem';

import styles from '@components/Navbar/Navbar.module.scss'

export const Navbar: FC = () => {
  return (
    <nav>
      <menu className={styles.navbar__menu}>
        <NavItem route={"/orders"} PageTitle={"Orders"} />

        <NavItem route={"/groups"} PageTitle={"Groups"} />

        <NavItem route={"/products"} PageTitle={"Products"} />

        <NavItem route={"/users"} PageTitle={"Users"} />

        <NavItem route={"/settings"} PageTitle={"Settings"} />
      </menu>
    </nav>
  );
};