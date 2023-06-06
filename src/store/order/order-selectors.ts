import { RootState } from 'store';

export const getCurrentOrder = (state: RootState) => state.order.currentOrder;
export const getConfirmedOrder = (state: RootState) => state.order.confirmedOrder;
