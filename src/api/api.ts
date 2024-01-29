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

    getCurrentWeather(city: string) {
        return instance.get("forecast.json", {
            params: {
                q: city,
                days: "7" 
            }
        })
    }
  }


export default api;