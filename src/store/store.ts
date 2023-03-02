import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/ProductSlice'


const rootReduser = combineReducers({
    productSlice
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']