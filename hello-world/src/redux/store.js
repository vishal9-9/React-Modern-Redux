import { configureStore } from "@reduxjs/toolkit";
import counterSilce from "./test/testSlice";

export const store =  configureStore({
    reducer:{
        counter: counterSilce,
    }
})