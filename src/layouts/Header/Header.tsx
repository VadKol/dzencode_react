import { FC } from "react";

import { TopMenu } from "@components/TopMenu";
import { Logo } from "@components/Logo";
import { SearchFrom } from '@components/SearchForm';

import styles from '@layouts/Header/Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <SearchFrom />

      <TopMenu />
    </header>
  );
};