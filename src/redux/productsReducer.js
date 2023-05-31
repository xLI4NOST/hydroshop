import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsData = createAsyncThunk('PRODUCTS/GET', async (thunkAPI) => {
    const response = await axios.get(`http://localhost:1337/api/products?pagination[page]=1&pagination[pageSize]=9&filters[category]=${thunkAPI.isPage}&populate=*`)
    return response.data
})// создаем асинхронную функцию, получаем ответ, возвращаем



//создаем слайс
export const productsSlice = createSlice({
    name: 'products', // Название слайсла
    initialState: {
        products: []
    }, //Начальное состояние
    reducers: {},// Внешнее действия
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.products = action.payload //Данные, которые возвращаем в асинке
        })
    }
})



