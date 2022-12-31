import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
}
export const getCategory = createAsyncThunk(
  'products/category',
  async (_, { rejectWithValue, dispatch }) => {
    const categoryProductDate = await fetch('http://localhost:3001/products/category');
    const categoryProduct = await categoryProductDate.json();
    dispatch(setCategory(categoryProduct.values));
  }
)

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload
    }
  },
  extraReducers: {
    [String(getCategory.fulfilled)]: () => console.log('fullfiled'),
    [String(getCategory.pending)]: () => console.log('pending'),
    [String(getCategory.rejected)]: () => console.log('rejected'),
  }
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;