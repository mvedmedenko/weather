import useConditionImage from "../../hooks/useConditionImage"
import { CurrentLocationWeather, CurrentLocation } from "../../types/types"

type PropsType = {
    currentForecast: CurrentLocationWeather
    location: CurrentLocation
}


const CurrentWheather = (props: PropsType) => {

    const getConditionImg = (code: number, isDay: number) => {
        return useConditionImage(code, isDay)
    }



    return (
        <div className="current-inner relative w-full h-full flex justify-between">
            <div className="current-name-box pl-8">
                <div>
                    <div className="current-city text-4xl font-medium">{props.location.name}</div>
                    <div className="current-country-name text-text-grey font-medium">{props.location.country}</div>
                </div>
                <div className="absolute bottom-0 text-5xl font-bold">
                    <div className="relative degrees-big">
                        <div>{Math.ceil(props.currentForecast.temp_c)}</div>
                    </div>
                </div>
            </div>
            <div className="current-img pr-8">
                <img className="w-40 h-40" src={getConditionImg(props.currentForecast.condition.code, props.currentForecast.is_day)} alt="ICON" />
            </div>
        </div>
    )
}

export default CurrentWheather;
