import { useAppSelector } from "../../hooks/hooks";
import useConditionImage from "../../hooks/useConditionImage";

const DayForecast = () => {

    const days = useAppSelector((state) => state.currentWeahter.forecast)


    const getTimeWeather = () => {
        const time = new Date();
        const currentHour = time.getHours();
        const output = [];
    
        for (let i = currentHour; i < currentHour + 6; i++) {
            if (i <= 23) {
                const currentTime = days[0].hour[i].time;
                const formattedTime = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                
                output.push({...days[0].hour[i], time: currentHour === new Date(currentTime).getHours() ? "Now" : formattedTime});
            } else {
                const currentTime = days[1].hour[i - 24].time;
                const formattedTime = new Date(currentTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const nextDayHour = {...days[1].hour[i - 24], time: currentHour === new Date(currentTime).getHours() ? "Now" : formattedTime};
                output.push(nextDayHour);
            }
        }
        return output;
    };

    const getConditionImg = (code: number, isDay: number) => {
        return useConditionImage(code, isDay)
    }



    return (
            <div className="w-full h-auto mt-5 bg-light-grey rounded-md p-5">
                <div className="!last-child:border-r-2 border-color text-text-grey font-bold">TODAY`S FORECAST</div>
                <div className="grid grid-cols-6 items-center">
                    {getTimeWeather().map((i, index) => {
                        return <div key={index} className={`grid grid-rows-3 gap-auto place-items-center text-center mt-5 ${
                            index === getTimeWeather().length - 1 ? "" : "border-r-2 border-color"
                          }`}>
                            <div className="text-text-grey font-bold">{i.time}</div>
                            <div className="flex justify-center"><img className="w-20 h-20" src={getConditionImg(i.condition.code, i.is_day)} alt="" /></div>
                            <div className="degrees-small font-bold text-2xl">{Math.ceil(i.temp_c)}</div>
                        </div>
                    })}
                </div>
            </div>
    )
}

export default DayForecast;

