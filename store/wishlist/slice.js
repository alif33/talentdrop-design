import { createSlice } from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
    name: "wishlists",
    initialState: {
        wishlist: [],
       
    },
    reducers: {
        setWishlist: (state, action) => {
            return {
                ...state,
                wishlist: action.payload
            }
        }
       
    }
})
