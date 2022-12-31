import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const bcrypt = require('bcryptjs');

interface userDate {
  email: string,
  password: string,
};

const initialState = {
  user: {
  },
};

export const userAuth = createAsyncThunk(
  'user/auth',
  async (authDate: userDate, {rejectWithValue, dispatch}) => {
    const userDate = await fetch(`http://localhost:3001/user?email=${authDate.email}`);
    const user = await userDate.json();
    if (user.values.lenght == 0) {
      console.log('Пользователь не найден');
    } else {
      if (bcrypt.compare(authDate.password, user.values[0].password)) {
        console.log('авторизация успешна');
        dispatch(setUser(user.values[0]));
      } else {
        console.log('ошибка');
      }
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: {
    [String(userAuth.fulfilled)]: () => console.log('fullfiled'),
    [String(userAuth.pending)]: () => console.log('pending'),
    [String(userAuth.rejected)]: () => console.log('rejected'),
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;