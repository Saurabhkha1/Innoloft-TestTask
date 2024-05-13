import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
};

export const getProduct = createAsyncThunk("getProduct", async () => {
  const res = await fetch("https://api-test.innoloft.com/product/6781/");
  const json = await res.json();
  return json;
});

export const editProduct = createAsyncThunk("editproduct", async (data) => {
  return await axios.put(`https://api-test.innoloft.com/product/6781/`, data);
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
