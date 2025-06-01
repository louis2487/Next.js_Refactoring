import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import listReducer from './checklistSlice'
import userReducer from './userslice';

export const store = configureStore({
  reducer: {
    mycar: carReducer,
    mylist: listReducer,
    myuser: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;  
export default store;
