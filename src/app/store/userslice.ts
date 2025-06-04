import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserType {
  useremail: string;
  userlogin: boolean;
}

const userSlice = createSlice({
  name: 'useremail',
  initialState: <UserType>{
    useremail: "",
    userlogin: false,
  },
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      state.userlogin = true;                   
      state.useremail = action.payload.email;   
    },
    logout: (state) => {
      state.userlogin = false;
      state.useremail = '';
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
