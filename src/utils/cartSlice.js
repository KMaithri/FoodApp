import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: [],
        resId: 0,
        resName : ""
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items = state.items.filter((item) => item.card.info.id != action.payload)
        },
        clearItems: (state) => {
            state.items.length = 0; //[]
        },
        addResName : (state,action) => {
            state.resName = action.payload;
        },
        addResId: (state,action) => {
            state.resId = action.payload;
        }
    }
});

export const{addItem, removeItem, clearItems,addResName,addResId} = cartSlice.actions;

export default cartSlice.reducer;