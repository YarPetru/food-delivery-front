import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { productsReducer } from './products';
import { currentShopReducer } from './current-shop';
import { orderReducer } from './order';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    currentShop: currentShopReducer,
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
