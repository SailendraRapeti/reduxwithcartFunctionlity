import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Slice"
 const Store = configureStore({
  reducer: {
   cartList:cartReducer,
  },
})
export default Store