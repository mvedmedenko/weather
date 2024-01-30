import { useAppSelector } from "../../hooks/hooks";
import useConditionImage from "../../hooks/useConditionImage";

const WeekForecast = () => {

    const day = useAppSelector((state) => state.currentWeahter.forecast)
    
    const getDayOfWeek = (dateString: string) => {
        const getFormattedDate = (date: Date) => {
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            return `${year}-${month}-${day}`;
        };
    
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const date = new Date(dateString);
        const dayOfWeek = date.getUTCDay();
        const todayFormat = getFormattedDate(new Date());
    
        return todayFormat === dateString ? "Today" : daysOfWeek[dayOfWeek];
    };

      const getConditionImg = (code: number, isDay: number) => {
        return useConditionImage(code, isDay)
      }

    return (
        <div className="w-full h-full relative">
            <div className="week-forecast p-5 bg-light-grey absolute w-full bottom-0 rounded-md gird grid-cols-7">
                {day.map((i, index) => {
                    
                    return <div key={index} className={`grid grid-cols-2 gap-2 pt-5 pb-5 ${
                        index === day.length - 1 ? "" : "border-b-2 border-color"
                      }`}>
                        <div className="flex justify-between text-center items-center">
                            <div className="font-medium text-text-grey">{getDayOfWeek(i.date)}</div>
                            <div><img className="w-16 h-16" src={getConditionImg(i.day.condition.code, 1)} alt="" /></div>
                        </div>
                        <div className="flex justify-between text-center items-center">
                            <div className="week-condition-text font-bold">{i.day.condition.text}</div>
                            <div><span className="font-bold">{Math.ceil(i.day.maxtemp_c)}</span> <span className="text-text-grey">/</span> <span className="text-text-grey">{Math.ceil(i.day.mintemp_c)}</span></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default WeekForecast;