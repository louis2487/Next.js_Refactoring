import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserType {
  email: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: <UserType>{
    email: "",
  },
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setStep} = userSlice.actions;
export default userSlice.reducer;
