import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './orderReducer';
import productsReducer from './productReducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
