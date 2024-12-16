import weatherReducer from "../features/weatherSlice.ts";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;