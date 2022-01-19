import { createSlice } from "@reduxjs/toolkit"

export const reportsSlice = createSlice({
    name: "reports",
    initialState: {
        reportItems: {},
      
    },
    reducers: {
        setReports: (state, action) => {
            return {
                ...state,
                reportItems: action.payload
            }
        }, 
       
    }
})
