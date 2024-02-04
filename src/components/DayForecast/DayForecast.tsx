import useConditionImage from "../../hooks/useConditionImage"
import { DailyForecast } from "../../types/types"

type TypeProps = {
    forecastHour: DailyForecast[]
    infoFrom: string
}

const DayForecast = (props: TypeProps) => {

    const getTimeWeather = () => {
        const time = new Date();
        const currentHour = time.getHours();
        const output = [];


        for (let i = currentHour; i < currentHour + (props.infoFrom === "foundCity" ? 3 : 6); i++) {
            if (i <= 23) {
                const currentTime = props.forecastHour[0].hour[i].time;
                const formattedTime = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                output.push({ ...props.forecastHour[0].hour[i], time: currentHour === new Date(currentTime).getHours() ? "Now" : formattedTime });
            } else {
                const currentTime = props.forecastHour[0].hour[i - 24].time;
                const formattedTime = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const nextDayHour = { ...props.forecastHour[0].hour[i - 24], time: currentHour === new Date(currentTime).getHours() ? "Now" : formattedTime };
                output.push(nextDayHour);
            }
        }
        return output;
    };

    const getConditionImg = (code: number, isDay: number) => {
        return useConditionImage(code, isDay)
    }



    return (
        <div className="day-box w-full h-auto mt-5 bg-light-grey rounded-md p-5">
            <div className="border-color text-text-grey font-bold">TODAY`S FORECAST</div>
            <div className="day-wrapper">
                <div className="day-inner grid grid-flow-col items-center">
                    {getTimeWeather().map((i, index) => {
                        return <div key={index} className={`day-item grid grid-rows-3 gap-auto place-items-center text-center mt-5 ${index === getTimeWeather().length - 1 ? "" : "border-r-2 border-color"
                            }`}>
                            <div className="text-text-grey font-bold">{i.time}</div>
                            <div className="flex justify-center"><img className="w-20 h-20" src={getConditionImg(i.condition.code, i.is_day)} alt="" /></div>
                            <div className="degrees-small font-bold text-2xl">{Math.ceil(i.temp_c)}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DayForecast;

