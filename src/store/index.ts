import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './products';
import { currentShopReducer } from './current-shop';
import { orderReducer } from './order';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  products: productsReducer,
  currentShop: currentShopReducer,
  order: orderReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
