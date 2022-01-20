import { combineReducers } from '@reduxjs/toolkit'
import { adminSlice } from './admins/slice'
import { categorySlice } from './categories/slice'
import { SettingSlice } from './settings/slice'
import { shopSlice } from './shops/slice'
import { singleProductSlice } from './singleProduct/slice'
import { tagSlice } from './tags/slice'
import { getUserInfoSlice } from './userInfo/slice'
import { userSlice } from './users/slice'

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    settings: SettingSlice.reducer,
    tags: tagSlice.reducer,
    categories: categorySlice.reducer,
    singleProduct: singleProductSlice.reducer,
    userInfo: getUserInfoSlice.reducer,
    shopItems: shopSlice.reducer,
})