import CurrentWheather from './components/CurrentWeather/CurrentWheather'
import DayForecast from './components/DayForecast/DayForecast'
import AirConditions from './components/AirConditions/AirConditions'
import WeekForecast from './components/WeekForecast/WeekForecast'
import Search from './components/Search/Search'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getCurrentWeatherAsync } from './features/weatherSlice/currentWeatherSlice'
import Loading from './components/Loading/Loading'
import FoundCities from './components/FoundCities/FoundCities'
import FoundCityForecast from './components/FoundCityForecast/FoundCityForecast'

function App() {

  const [location, setLocation] = useState({ city: '', country: '' });
  const isLoaded = useAppSelector((state) => state.currentWeahter.isLoaded)
  // const isDay = useAppSelector((state) => state.currentWeahter.currentLocationWeather.current.is_day)
  const inputValue = useAppSelector((state) => state.currentWeahter.inputValue)
  const currentForecast = useAppSelector((state) => state.currentWeahter.currentLocationWeather.current)
  const currentLocation = useAppSelector((state) => state.currentWeahter.currentLocationWeather.location)
  const foundCityForecast = useAppSelector((state) => state.currentWeahter.foundCityForecast)
  const currentForecastDays = useAppSelector((state) => state.currentWeahter.currentLocationWeather.forecast.forecastday)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        const { country, city } = data;
        setLocation({ country: country, city: city });
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });

  }, []);

  useEffect(() => {
    if (location.city !== '' && location.country !== '') {
      dispatch(getCurrentWeatherAsync(location))
    }
  }, [location])



  return (
    <div className='app h-screen w-full'>
      {!isLoaded
        ? <Loading />
        :
        <div className='inner grid grid-cols-12 p-5 h-screen'>
          {inputValue.length > 0
            ?
            <div className='current-box col-span-8 pr-5'>
              <Search />
              <FoundCities />
            </div>
            :
            <div className='current-box grid col-span-8 pr-5' >
              <Search />
              <CurrentWheather currentForecast={currentForecast} location={currentLocation} />
              <DayForecast forecastHour={currentForecastDays} infoFrom={"currentCity"} />
              <AirConditions />
            </div>
          }
          {inputValue.length > 0
            ?
            <div className='week-box grid col-start-9 col-span-4'>
              {Object.keys(foundCityForecast).length > 0 && <FoundCityForecast />}
            </div>
            :
            <div className="week-box relative grid col-start-9 col-span-4">
              <div className='week-inner absolute bottom-0 w-full'>
                <WeekForecast forecastDay={currentForecastDays} />
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default App
