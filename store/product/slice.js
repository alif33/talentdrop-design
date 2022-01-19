import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: null,
      
    },
    reducers: {
        setProducts: (state, action) => {
            return {
                ...state,
                productList: action.payload
            }
        }, 
       
    }
})
