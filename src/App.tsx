import CurrentWheather from './components/CurrentWeather/CurrentWheather'
import DayForecast from './components/DayForecast/DayForecast'
import AirConditions from './components/AirConditions/AirConditions'
import WeekForecast from './components/WeekForecast/WeekForecast'
import Search from './components/Search/Search'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getCurrentWeatherAsync } from './features/weatherSlice/currentWeatherSlice'
import Loading from './components/Loading/Loading'

function App() {

  const [location, setLocation] = useState({ city: '', country: '' });
  const isLoaded = useAppSelector((state) => state.currentWeahter.isLoaded)
  const isDay = useAppSelector((state) => state.currentWeahter.currentLocationWeather.is_day)
  console.log(isDay)
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
    if (location.city !== '') {
      dispatch(getCurrentWeatherAsync(location.city))
    }
  }, [location])







  return (
    <div className='app h-screen w-full'>
      {!isLoaded
        ? <Loading/>
        :
        <div className='inner grid grid-cols-12 p-5 h-screen'>
          <div className='current-box grid col-span-8 pr-5' >
            <Search />
            <CurrentWheather />
            <DayForecast />
            <AirConditions />
          </div>
          <div className="week-box grid col-start-9 col-span-4">
            <WeekForecast />
          </div>
        </div>
      }
    </div>
  )
}

export default App
