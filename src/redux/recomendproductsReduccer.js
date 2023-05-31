import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRecomendProductsData = createAsyncThunk('RECOMENDS/GET', async (thunkAPI, item) => {
    const response = await axios.get('http://localhost:1337/api/recomend-products?populate=*')
    return response.data.data
})


export const recomendProductsSlice = createSlice({
    name: 'RecomendProducts',
    initialState: {
        recomendProducts: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecomendProductsData.fulfilled, (state, action) => {
            state.recomendProducts = action.payload
        })
    }
})