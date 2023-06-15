import { FC } from 'react';

import { Navbar } from '@/components/SidebarComponents/Navbar';

import styles from '@layouts/Sidebar/Sidebar.module.scss';

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Navbar />
    </aside>
  );
};
