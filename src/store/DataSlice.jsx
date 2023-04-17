// nanoid(8) -> 生成8碼的隨機ID
import {nanoid, createSlice} from "@reduxjs/toolkit";

// 假設表格能回傳一個array，那就把user整合
// 還要有個機制，能把userData跟Card的資料一起post出去
const DataSlice = createSlice({
  name: 'data',
  initialState: {
    userName: "",
    userText: "",
    userId: "",
    Card: []
  },
  reducers: {
    addUser(state, action){
      state.userName = action.payload.userName
      state.userText = action.payload.userText
      state.userId = nanoid(8)
    },
    addCard(state, action){
      state.push(action.payload)
    } //假定push的就是卡片的index(或ID)
  }
})

export const {addCard, addUser} = DataSlice.actions
export const DataReducer = DataSlice.reducer