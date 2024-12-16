import React, {useState} from 'react';
import {api_key, base_url} from '../utils/constants.ts';
import {setLoading, setMessage, setWeatherInfo} from "../features/weatherSlice.ts";
import {fetchWeather} from "../features/api/weatherApi.ts";
import {useAppDispatch} from "../features/hooks.ts";


const Form = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            dispatch(setMessage('Please enter a city name'));
            return;
        }
        dispatch(setLoading(true));

        try {
            const weatherData = await fetchWeather(city, api_key, base_url);
            if (weatherData) {
                dispatch(setWeatherInfo(weatherData));
            } else {
                dispatch(setMessage('Weather data not available...'));
            }
            dispatch(setMessage(''));

        } catch (error) {
            if (error instanceof Error) {
                dispatch(setMessage(error.message));
            } else {
                dispatch(setMessage('Unknown error...'));
            }
        } finally {
            dispatch(setLoading(false));
        }
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;













