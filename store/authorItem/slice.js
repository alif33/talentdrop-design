import { createSlice } from "@reduxjs/toolkit"

export const authorItemSlice = createSlice({
    name: "authorItem",
    initialState: {
        authorItem: [],
        authorItemLoading: true
      
    },
    reducers: {
        setAuthorItem: (state, action) => {
            return {
                ...state,
                authorItem: action.payload,
                authorItemLoading: false
            }
        }, 
       
    }
})
