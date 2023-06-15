import { PageRoutes } from '@utils/router';
import { FC } from 'react';

import { Header } from '@/layouts/Header';
import { Sidebar } from '@/layouts/Sidebar';

import styles from '@layouts/MainLayout/MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <PageRoutes />
      </main>
    </div>
  );
};
