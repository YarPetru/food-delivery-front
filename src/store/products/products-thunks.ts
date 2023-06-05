import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:9999/api/';
axios.defaults.baseURL = 'https://food-delivery-back-9ix7.onrender.com/api/';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get('/products');
  return res.data;
});
