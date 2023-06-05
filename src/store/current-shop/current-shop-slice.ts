import { createSlice } from '@reduxjs/toolkit';

const initialCurrentShopState = {
  shopTitle: '',
};

const currentShopSlice = createSlice({
  name: 'currentShop',
  initialState: initialCurrentShopState,
  reducers: {
    setCurrentShop: (state, action) => {
      state.shopTitle = action.payload;
    },
  },
});

export const { setCurrentShop } = currentShopSlice.actions;

export default currentShopSlice.reducer;
