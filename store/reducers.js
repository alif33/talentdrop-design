import { combineReducers } from '@reduxjs/toolkit'
import { adminSlice } from './admins/slice'
import { countrySlice } from './countries/slice'
import { SettingSlice } from './settings/slice'
import { stateSlice } from './states/slice'
import { tagSlice } from './tags/slice'
import { timezoneSlice } from './timezones/slice'
import { userSlice } from './users/slice'

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    settings: SettingSlice.reducer,
    tags: tagSlice.reducer,
    countries: countrySlice.reducer,
    states: stateSlice.reducer,
    timezones: timezoneSlice.reducer
})