import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice';
import listReducer from './checklistSlice'

export const store = configureStore({
  reducer: {
    mycar: carReducer,
    mylist: listReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;  
export default store;
