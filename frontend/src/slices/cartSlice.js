import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse (localStorage.getItem("cart")): {cartItems: []};
const addDecimals = (num){
    return (Math.round(num *100) / 100).toFixed(2); 
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart: (state, action)=>{
            const item = action.payload
            const existItem= state.cartItems.find((x) =>x._id===item._id)

            if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x );
            } else {
                state.cartItems = [ ...state.cartItems,item];
            }
            state.itemsPrice = addDecimals( state.cartItems.reduce((acc,item) => acc+ item.price *item.qty,0));
            state.itemsShip = addDecimals(state.itemsPrice > 300000 ? 0 : 30000 )
            state.totalPrice= (
                Number(state.itemsPrice)+
                Number(state.itemsShip)
                ).toFixed(2)
        }
    }

});
export default cartSlice.reducer