import { createSlice } from "@reduxjs/toolkit";


 interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}


 interface WeatherState {
    weatherInfo: WeatherInfo | null;
    message: string;
    loading: boolean;
}


const initialState: WeatherState = {
    weatherInfo: null,
    message: 'ENTER CITY NAME',
    loading: false
};


const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setMessage: (state, action: { payload: string }) => {
            state.message = action.payload;
        },
        setWeatherInfo: (state, action: { payload: WeatherInfo }) => {
            state.weatherInfo = action.payload;
        },
        setLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload;
        },
    }
});


export const { setMessage, setWeatherInfo, setLoading } = weatherSlice.actions;
export default weatherSlice.reducer;