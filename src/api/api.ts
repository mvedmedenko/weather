import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
    params: {
      key: '96135730fd9b4e3ca91193844242201',
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
    },
  });


  const api = {

    getCurrentLocation() {
        return axios.get("https://ipapi.co/json/")
    },

    getCurrentWeather(city: string, country: string) {
        return instance.get("forecast.json", {
            params: {
                q: `${city},${country}`,
                days: "7" 
            }
        })
    },

    getFoundCityWeather(city: string, country: string) {
        return instance.get("forecast.json", {
            params: {
                q: `${city},${country}`,
                days: "3" 
            }
        })
    },

    getFoundCities(request: string) {
      return instance.get("search.json", {
        params: {
            q: request,
        }
    })
    }
  }


export default api;
