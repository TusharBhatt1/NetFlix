import { configureStore } from "@reduxjs/toolkit"
import HomeSlice  from "./HomeSlice"

export const Reduxstore = configureStore({
    reducer:{
        home : HomeSlice
    }
})
