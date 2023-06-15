import { products } from '@api/ProductsMochData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [...products],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
