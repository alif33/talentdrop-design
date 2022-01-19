import { createSlice } from "@reduxjs/toolkit"

export const slugSlice = createSlice({
    name: "products",
    initialState: {
        productList: null,
        productLoading: true
      
    },
    reducers: {
        setCategorySlug: (state, action) => {
            return {
                ...state,
                productList: action.payload,
                productLoading: false
            }
        }, 
       
    }
})
