import React, {useState} from 'react';
import {api_key, base_url} from '../utils/constants.ts';
import {fetchWeather, setMessage} from "../features/weatherSlice.ts";
import {useAppDispatch} from "../features/hooks.ts";


const Form = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            dispatch(setMessage('Enter city name'));
            return;
        }
        dispatch(setMessage(''));
        dispatch(fetchWeather({city, apiKey: api_key, baseUrl: base_url}));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">
                Get Weather
            </button>
        </form>
    );
};

export default Form;













