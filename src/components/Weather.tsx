
import {useAppSelector} from "../features/hooks.ts";

export const Weather = () => {
    const { weatherInfo, message, loading } = useAppSelector(state => state.weather);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={'infoWeath'}>
            {message && <p>{message}</p>}

            {!message && (
                <>
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temp: {weatherInfo.temp}°C</p>
                    <p>Pressure: {weatherInfo.pressure} hPa</p>
                    <p>Sunset: {new Date(weatherInfo.sunset * 1000).toLocaleTimeString()}</p>
                </>
            )}
        </div>
    );
};
