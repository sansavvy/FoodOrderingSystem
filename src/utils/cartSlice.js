import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //actions
    addItem: (state, action) => {
      // Redux toolkit uses immer BTS
      state.items.push(action.payload);
    }, //----> reducer function
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items:["Pizza"]}
    clearCart: (state) => {
      state.items.length = 0;

      //  **By dng this way, state = [] - it will not actually */
      // mutate the original state.It's just updates the reference of the state.(local state update)
      // To modify original state, have to do this way  state.items.length = 0;
      // Either mutate the exisitng state or return a new state.
      //return {item:[]} - this new obj will be replaces inside originalSate={items:["Pizza"]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
