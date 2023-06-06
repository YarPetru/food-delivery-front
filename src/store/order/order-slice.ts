import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addOrder } from './order-thunks';
import { IProduct, IConfirmedOrder } from 'types/types';

interface ProductsState {
  currentOrder: IProduct[];
  confirmedOrder: IConfirmedOrder;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  currentOrder: [],
  confirmedOrder: { user: null, order: null },
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<IProduct>) => {
      state.currentOrder.push(action.payload);
    },
    removeFromOrder: (state, action) => {
      state.currentOrder = state.currentOrder.filter(product => {
        return product._id !== action.payload._id;
      });
    },
    changeQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const currentProduct = state.currentOrder.find(p => p._id === productId);
      if (currentProduct) {
        currentProduct.quantity = quantity;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(addOrder.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addOrder.fulfilled, (state, action: PayloadAction<IConfirmedOrder>) => {
      state.isLoading = false;
      state.confirmedOrder = action.payload;
      state.currentOrder = initialState.currentOrder;
    });

    builder.addCase(addOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });
  },
});

export const { addToOrder, removeFromOrder, changeQuantity } = orderSlice.actions;

export default orderSlice.reducer;
