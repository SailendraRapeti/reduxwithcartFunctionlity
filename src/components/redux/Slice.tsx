import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface Cart {
    cartList: any
}

const initialState: Cart = {
    cartList: [],
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<any>) => {
            if(state.cartList.length >= 1){
                state.cartList = [...state.cartList, { ...action.payload,quantity:1 }];
                let dub:any = []
                const filt = state.cartList.filter((each:any)=>
                !dub.includes(each.id) && dub.push(each.id))
                state.cartList=filt
            }else{
                state.cartList = [...state.cartList, { ...action.payload ,quantity:1}];
               
            }
            
        },
        deleteItem: (state, action: PayloadAction<any>) => {
            const filtData = state.cartList.filter((each: any) =>
                each.id != action.payload)
            state.cartList = filtData
         
        },
        increMent:(state,action:PayloadAction<any>)=>{
            const increase = state.cartList.filter((each:any)=>
            each.id === action.payload ? each.quantity=each.quantity+1 :{each})
            state.cartList=increase
        },
        decreaseMent:(state,action:PayloadAction<any>) => {
            const decrease= state.cartList.filter((each:any)=>
            each.id === action.payload ? each.quantity=each.quantity-1 :{each})
            state.cartList=decrease

        }
    },
})
export const { addCart, deleteItem ,increMent,decreaseMent} = counterSlice.actions
export default counterSlice.reducer