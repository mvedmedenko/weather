import { useState } from "react";
import { getFoundCitiesAsync } from "../../features/weatherSlice/currentWeatherSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { setInputValueToStore, clearFoundCityForecast, clearFoundCities } from "../../features/weatherSlice/currentWeatherSlice";



const Search = () => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState('');
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            handleDebouncedInput(event.target.value);
        }, 500);

        setTimeoutId(newTimeoutId);
    };

    const handleDebouncedInput = (value: string) => {
        dispatch(setInputValueToStore(value))
        dispatch(clearFoundCityForecast())
        if(value.length > 0) {
            dispatch(getFoundCitiesAsync(value))
        }
        if(value.length === 0) {
            dispatch(clearFoundCities())
        }
    };



    return (
        <div className="h-10">
            <input 
            onChange={handleInputChange} 
            value={inputValue} 
            className="font-medium bg-light-grey h-10 rounded-md w-full pl-3 hover:border-2 hover:border-sky-500 duration-300 outline-sky-500" 
            type="search" 
            placeholder="Search for cities" 
            />
        </div>
    )
}

export default Search;