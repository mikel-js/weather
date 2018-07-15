import axios from 'axios'

const API_KEY = '470728803af222ed88ae093373c66a60'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}&q=${city},${country}`
    const request = axios.get(url)


    return {
        type: FETCH_WEATHER,
        payload: request
    }
}