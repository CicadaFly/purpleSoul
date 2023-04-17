import { configureStore } from "@reduxjs/toolkit";
import { DataReducer, addCard, addUser } from "./DataSlice";

const store = configureStore({
  reducer:{
    data: DataReducer
  }
})

export {store, addCard, addUser}