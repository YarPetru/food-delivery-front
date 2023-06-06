import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { IConfirmedOrder } from 'types/types';

axios.defaults.baseURL = 'https://food-delivery-back-9ix7.onrender.com/api/';

export const fetchOrders = createAsyncThunk('orders/fetch', async () => {
  const res = await axios.get('/orders');
  return res.data;
});

export const addOrder = createAsyncThunk(
  'orders/add',
  async (order: IConfirmedOrder, { rejectWithValue }) => {
    try {
      const response = await axios.post('/orders', order);
      toast.success(`Thank you for your order! Wait for the delivery!`, {
        toastId: nanoid(),
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.warn(`Something went wrong. Error: ${error.response?.data.message}`, {
          toastId: nanoid(),
        });
      } else {
        toast.warn(`Something went wrong. Error: ${error}`, {
          toastId: nanoid(),
        });
      }
      return rejectWithValue(error);
    }
  }
);
