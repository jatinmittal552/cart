import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id:number
    image:string
    name:string
    price:number
    quantity:number
}

type cartState = {
    items:Product[]
}
 
const initialState : cartState={
    items:[],
}

export const cardSlicer = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state,action:PayloadAction<Product>)=>{
            const existingProduct = state.items.find((item)=>item.id === action.payload.id)
            if(existingProduct){
                existingProduct.quantity+=1;
            }else{
                state.items.push({...action.payload,quantity:1})
            }
        },
        removeCart : (state,action:PayloadAction<number>)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload);
        },
        updateQuantity : (state,action:PayloadAction<{id:number,quantity:number}>) => {
            const product = state.items.find((item)=>item.id === action.payload.id)
            if(product){
                product.quantity=action.payload.quantity;
            } 
        }
    }
})

export const {addToCart,removeCart,updateQuantity} =  cardSlicer.actions
export default cardSlicer.reducer