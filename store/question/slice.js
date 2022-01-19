import { createSlice } from "@reduxjs/toolkit"

export const questionSlice = createSlice({
    name: "qestions",
    initialState: {
        questionsList: null,
      
    },
    reducers: {
        setQuestions: (state, action) => {
            return {
                ...state,
                questionsList: action.payload
            }
        }, 
       
    }
})
