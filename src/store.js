import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './pages/login/loginSlice';
import productReducer from "./pages/product/productSlice";

const store = configureStore({
    reducer: {
        login : loginReducer,
        product: productReducer,
    },
});

export default store;