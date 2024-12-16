export const fetchWeather = async (city: string, apiKey: string, baseUrl: string) => {
    try {
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
            {
                console.error()}
        }
    } catch (error)
    { console.log(error)
        throw new Error('Enter Correct City Name');
    }
};