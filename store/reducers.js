import { combineReducers } from '@reduxjs/toolkit'
import { adminSlice } from './admins/slice'
import { authorItemSlice } from './authorItem/slice'
import { categorySlice } from './categories/slice'
import { followerSlice } from './follow/slice'
import { productSlice } from './product/slice'
import { questionSlice } from './question/slice'
import { reportsSlice } from './reports/slice'
import { slugSlice } from './searchSlug/slice'
import { SettingSlice } from './settings/slice'
import { shopSlice } from './shops/slice'
import { singleProductSlice } from './singleProduct/slice'
import { getUserInfoSlice } from './userInfo/slice'
import { userSlice } from './users/slice'
import { wishlistSlice } from './wishlist/slice'

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    settings: SettingSlice.reducer,
    categories: categorySlice.reducer,
    wishlists: wishlistSlice.reducer,
    products: productSlice.reducer,
    followers: followerSlice.reducer,
    questions: questionSlice.reducer,
    singleProduct: singleProductSlice.reducer,
    authorItems: authorItemSlice.reducer,
    reports: reportsSlice.reducer,
    userInfo: getUserInfoSlice.reducer,
    shopItems: shopSlice.reducer,
    slugProducts: slugSlice.reducer
})