import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
}
export const getCategoryProducts = createAsyncThunk(
  'products/changeCategory',
  async (id: number, {rejectWithValue, dispatch}) => {
    if (id == 1) {
      const categoryProductDate = await fetch(`http://localhost:3001/products/popularproducts`);
      const categoryProduct = await categoryProductDate.json();
      dispatch(setProducts(categoryProduct.values)); 
    } else if (id == 2) {
      const categoryProductDate = await fetch(`http://localhost:3001/products/newproducts`);
      const categoryProduct = await categoryProductDate.json();
      dispatch(setProducts(categoryProduct.values)); 
    } else {
      const categoryProductDate = await fetch(`http://localhost:3001/products/changeCategory?id=${id}`);
      const categoryProduct = await categoryProductDate.json();
      dispatch(setProducts(categoryProduct.values));
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  },
  extraReducers: {
    [String(getCategoryProducts.fulfilled)]: () => console.log('fullfiled'),
    [String(getCategoryProducts.pending)]: () => console.log('pending'),
    [String(getCategoryProducts.rejected)]: () => console.log('rejected'),
  }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;