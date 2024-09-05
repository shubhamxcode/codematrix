// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from "../Feature/addtofav/Addtofav"

export const store = configureStore({
  reducer:{
    favorites:favoritesReducer,
  },
});
