import axios from 'axios';

export const getWeatherByLocation = async (location: string) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_URL}`)
    return response
  } catch (error) {
    return error
  }
}

export const getWeatherForecast = async (lat: string, lon: string) => {
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&dt=${Date.now()}&units=metric&appid=${process.env.REACT_APP_API_URL}`)
    return res.data
  } catch (error) {
    return error
  }
}

export const refreshCityWeather = async (location: string) => {
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_URL}`)
}