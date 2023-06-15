import { deleteOrder } from '@/redux/orderReducer';
import { Product } from '@/types/Product';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderTotal, calculateOrderTotal } from '../../../helpers';
import { RootState } from '../../../redux/rootReducer';
import { Order } from '../../../types/Order';
import { OrderItem } from '../OrderItem';

import styles from './OrderList.module.scss';

export const OrdersList: FC = () => {
  const orders: Order[] = useSelector(
    (state: RootState) => state.orders.orders,
  );
  const products: Product[] = useSelector(
    (state: RootState) => state.products.products,
  );

  const dispatch = useDispatch();

  const handleDeleteButton = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <ul className={styles.orderList}>
      {orders.map(order => {
        const orderTotal: OrderTotal = calculateOrderTotal(order, products);

        return (
          <OrderItem
            key={order.id}
            orderTitle={order.title}
            countProducts={0}
            shortDate={order.date}
            longDate={order.date}
            sumInDollars={`${orderTotal.dollars} USD`}
            sumInHryvnas={`${orderTotal.hryvnas} UAH`}
            handleDeleteButton={() => handleDeleteButton(order.id)}
          />
        );
      })}
    </ul>
  );
};
