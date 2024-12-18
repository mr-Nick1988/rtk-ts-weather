import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


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
    error: string | null;

}


const initialState: WeatherState = {
    weatherInfo: null,
    message: 'ENTER CITY NAME',
    loading: false,
    error: null
};


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (params: { city: string, apiKey: string, baseUrl: string }) => {
        const {city, apiKey, baseUrl} = params;
        const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data) {
            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            };
        } else {
            throw new Error('Enter Correct City Name')
        }
    }
);


const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setMessage: (state, action: { payload: string }) => {
            state.message = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherInfo = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed fetch";
            });
    },

});

export const {setMessage} = weatherSlice.actions;
export default weatherSlice.reducer;