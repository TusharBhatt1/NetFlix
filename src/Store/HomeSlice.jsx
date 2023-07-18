import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
    name:"homeee",
    initialState:{
        url:{} , genres:{}
    },
    reducers:{
     
        getApiConfigurtion: (state, action)=>{
            state.url= action.payload
        },
        getGenres: (state, action)=>{
        state.genres= action.payload
        }

    }
})
export default  HomeSlice.reducer
export const {getApiConfigurtion,getGenres} = HomeSlice.actions