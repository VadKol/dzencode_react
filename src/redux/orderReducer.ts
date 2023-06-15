import { orders } from '@api/OrdersMochData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types/Order';

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [...orders],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
  },
});

export const { addOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
