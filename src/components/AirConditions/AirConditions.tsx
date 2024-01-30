import wind from "../../assets/images/airConditionsIcons/wind.svg"
import sun from "../../assets/images/airConditionsIcons/sun.svg"
import temperature from "../../assets/images/airConditionsIcons/temperature.svg"
import water from "../../assets/images/airConditionsIcons/water.svg"
import { useAppSelector } from "../../hooks/hooks"

const AirConditions = () => {

    const currentLocationWeather = useAppSelector((state) => state.currentWeahter.currentLocationWeather)

    return (
        <div className="condition-box w-full h-auto mt-5 bg-light-grey rounded-md p-5">
            <div className="!last-child:border-r-2 border-color text-text-grey font-bold">AIR CONDITIONS</div>
            <div className="grid grid-cols-2 grid-rows-2 items-center h-full pb-2">
                <div className="flex">
                    <div className="mr-2"><img className="w-5 h-5" src={temperature} alt="ICON" /></div>
                    <div>
                        <div className="font-medium text-text-grey">Real Feel</div>
                        <div className="font-bold text-2xl">{currentLocationWeather.feelslike_c}</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2"><img className="w-5 h-5" src={wind} alt="ICON" /></div>
                    <div>
                        <div className="font-medium text-text-grey">Wind</div>
                        <div className="font-bold text-2xl">{currentLocationWeather.wind_kph} km/h</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2"><img className="w-5 h-5" src={water} alt="Icon" /></div>
                    <div>
                        <div className="font-medium text-text-grey">Humidity</div>
                        <div className="font-bold text-2xl">{currentLocationWeather.humidity}%</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2"><img className="w-5 h-5" src={sun} alt="Icon" /></div>
                    <div>
                        <div className="font-medium text-text-grey">UV Index</div>
                        <div className="font-bold text-2xl">{currentLocationWeather.uv}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirConditions;