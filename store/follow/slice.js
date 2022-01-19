import { createSlice } from "@reduxjs/toolkit"

export const followerSlice = createSlice({
    name: "followers",
    initialState: {
        userFollowerList: null,
        userFollowingList: null,
        following: null,
        follower: null,
     
    },
    reducers: {
        setUserFollower: (state, action) => {
            return {
                ...state,
                userFollowerList: action.payload
            }
        }, 
        setUserFollowing: (state, action) => {
            return {
                ...state,
                userFollowingList: action.payload
            }
        }, 
       
    }
})
