
import { createSlice } from '@reduxjs/toolkit';

//Redux logic
/*Reducer setup: 1) add products,
                 2) remove products: updates the cartItems array by filtering out the item with the ID provided in the action payload,
                 3) clear all items at once: it sets the cartItems array to an empty array, effectively clearing all items from the cart,
                 4) increase quatity: finds the item in the shopping cart whose identifier (id) matches the identifier passed in the action payload, then +=1, 
                 5) decrease quatity: updates the cartItems array by filtering out the item with the ID provided in the action payload 
                 
                 state: This represents the current state of the Redux store.
                 action: Is an object that describes the action object describing the action being performed.

                 'createSlice' returns an object containing the generated action creators and the reducer function.
*/
const initialState = {cartItems: [],}; // empty array for cart items
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action){
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); 
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 }); 
            }
        },

        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        clearCart(state) {
            state.cartItems = []; 
        },

        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload); 
            if (itemToIncrease) {
                itemToIncrease.quantity += 1; 
            }
        },

        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload); 
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1; 
            }
        }
    }
});

export const {addItemToCart,removeItemFromCart,clearCart,increaseItemQuantity,decreaseItemQuantity} = CartSlice.actions;
export default CartSlice.reducer;





