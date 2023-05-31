import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsSlice} from "./productsReducer";
import {recomendProductsSlice} from "./recomendproductsReduccer";


const rootReducer = combineReducers({
    products: productsSlice.reducer,
    recomendProducts: recomendProductsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
})