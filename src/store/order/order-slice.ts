import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addOrder } from './order-thunks';
import { IProduct } from 'types/types';

interface ProductsState {
  data: IProduct[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  data: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<IProduct>) => {
      state.data.push(action.payload);
    },
    removeFromOrder: (state, action) => {
      state.data = state.data.filter(product => {
        return product._id !== action.payload._id;
      });
    },
    changeQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const currentProduct = state.data.find(p => p._id === productId);
      if (currentProduct) {
        currentProduct.quantity = quantity;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(addOrder.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addOrder.fulfilled, (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });
  },
});

export const { addToOrder, removeFromOrder, changeQuantity } = orderSlice.actions;

export default orderSlice.reducer;
