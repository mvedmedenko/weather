import { useAppSelector } from "../../hooks/hooks"
import useConditionImage from "../../hooks/useConditionImage"


const CurrentWheather = () => {
    const currentLocation = useAppSelector((state) => state.currentWeahter.currentLocation)
    const currentLocationWeather = useAppSelector((state) => state.currentWeahter.currentLocationWeather)

    const getConditionImg = (code: number, isDay: number) => {
        return useConditionImage(code, isDay)
    }



    return (
        <div className="relative w-full h-full flex justify-between">
            <div className=" pl-8">
                <div>
                    <div className="text-4xl font-medium">{currentLocation.name}</div>
                </div>
                <div className="absolute bottom-0 text-5xl font-bold">
                    <div className="relative degrees-big">
                        <div>{Math.ceil(currentLocationWeather.temp_c)}</div>
                    </div>
                </div>
            </div>
            <div className="pr-8">
                <img className="w-60 h-60" src={getConditionImg(currentLocationWeather.condition.code, currentLocationWeather.is_day)} alt="ICON" />
            </div>
        </div>
    )
}

export default CurrentWheather;
