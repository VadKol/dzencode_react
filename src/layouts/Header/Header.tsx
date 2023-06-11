import { FC } from "react";

import { TopMenu } from "@/components/HeaderComponents/TopMenu";
import { Logo } from "@/components/HeaderComponents/Logo";
import { SearchFrom } from '@/components/HeaderComponents/SearchForm';

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