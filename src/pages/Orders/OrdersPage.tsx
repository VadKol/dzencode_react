import { FC } from 'react';

import { OrdersList } from '@components/OrderComponents/OrdersList';

import styles from './OrdersPage.module.scss';

export const OrdersPage: FC = () => {
  return (
    <section className={styles.ordersPage}>
      <OrdersList />
    </section>
  );
};
