import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './products-thunks';
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

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? String(action.payload) : 'Unknown error';
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
