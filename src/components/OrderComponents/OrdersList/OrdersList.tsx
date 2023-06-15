import { deleteOrder } from '@/redux/orderReducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { Order } from '../../../types/Order';
import { Product } from '@/types/Product';
import { OrderItem } from '../OrderItem';
import { calculateOrderTotal, OrderTotal } from '../../../helpers';

import styles from './OrderList.module.scss'

export const OrdersList: React.FC = () => {
  const orders: Order[] = useSelector((state: RootState) => state.orders.orders);
  const products: Product[] = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch();

  const handleDeleteButton = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <ul className= {styles.orderList}>
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
