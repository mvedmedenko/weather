import { useAppSelector } from "../../hooks/hooks"
import CurrentWheather from "../CurrentWeather/CurrentWheather"
import DayForecast from "../DayForecast/DayForecast"
import WeekForecast from "../WeekForecast/WeekForecast"


const FoundCityForecast = () => {

    const cityForecast = useAppSelector((state) => state.currentWeahter.foundCityForecast)

    return (
        <div>
            {cityForecast.forecast.forecastday.length === 0
                ?
                <></>
                :
                <div>
                    <div className="w-full h-full grid grid-cols-1 grid-rows-1 gap-5">
                        <div className="h-auto">
                            <CurrentWheather currentForecast={cityForecast.current} location={cityForecast.location} />
                        </div>
                        <div className="w-full">
                            <DayForecast forecastHour={cityForecast.forecast.forecastday} infoFrom={"foundCity"} />
                        </div>
                        <div className="w-full">
                            <WeekForecast forecastDay={cityForecast.forecast.forecastday} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FoundCityForecast;