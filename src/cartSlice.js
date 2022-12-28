import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartData',
  initialState: {
    cartArr: [],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    cartArrAdd: (state, action) => {
      // Ensures only One product of each Type exists, 
      //updates existing product, to new added product. 
      let productList = [];
      for (let i = 0; i < state.cartArr.length; i++) {
        productList.push(
          state.cartArr[i][0]
        )
      }

      if (productList.includes(action.payload[0])) {
        for (let i = 0; i < state.cartArr.length; i++) {
          if (state.cartArr[i][0] === action.payload[0]) {
            // Edit Existing Item
            state.cartArr[i] = action.payload;
          }
        }
      } else {
        // Add New Item
        state.cartArr = [...state.cartArr, action.payload]
      }

    },
    cartArrRemoveAll: (state) => {
      state.cartArr = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { cartArrAdd, cartArrRemoveAll } = cartSlice.actions

export default cartSlice.reducer