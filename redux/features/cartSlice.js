import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartValue: {
            quantity: 0,
            value: 0
        }
    },
    reducers: {
        addItem(state, action) {
            const idx = state.cartItems.findIndex((item) => item.id == action.payload.id)
            console.log(idx);
            if (idx != -1) {
                state.cartItems[idx].quantity++
            }
            else {
                state.cartItems.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    img: action.payload.img,
                    rate: action.payload.rate,
                    quantity: 1,
                    size: action.payload.size
                })
            }
            state.cartValue.quantity++
            state.cartValue.value += action.payload.rate
        },
        incrementItem(state, action) {
            const idx = state.cartItems.findIndex((item) => item.id == action.payload.id)
            state.cartItems[idx].quantity++
            state.cartValue.quantity++
            state.cartValue.value += action.payload.rate

        },
        decrementItem(state, action) {
            const idx = state.cartItems.findIndex((item) => item.id == action.payload.id)
            if (state.cartItems[idx].quantity > 1) {
                state.cartItems[idx].quantity--
                state.cartValue.quantity--
                state.cartValue.value -= action.payload.rate
            }

        },
        deleteItem(state, action) {
            const idx = state.cartItems.findIndex((item) => item.id == action.payload.id)
            state.cartValue.quantity -= state.cartItems[idx].quantity
            state.cartValue.value -= state.cartItems[idx].quantity * state.cartItems[idx].rate
            state.cartItems.splice(idx, 1)
        },
        clearCart(state) {
            state.cartItems = []
            state.cartValue = {
              quantity: 0,
              value: 0
            }
        }
    }
})

export const { addItem, deleteItem, incrementItem, decrementItem,clearCart } = cartSlice.actions
export default cartSlice.reducer