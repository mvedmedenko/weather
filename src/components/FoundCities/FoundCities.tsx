import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getFoundCityForecastAsync } from "../../features/weatherSlice/currentWeatherSlice";

const FoundCities = () => {
  const dispatch = useAppDispatch();
  const foundCities = useAppSelector((state) => state.currentWeahter.foundCities);
  const foundCityForecastLocation = useAppSelector((state) => state.currentWeahter.foundCityForecast.location);

  const onClickHandler = (city: string, country: string) => {
    const obj = {city, country}
    dispatch(getFoundCityForecastAsync(obj));
  };

  return (
    <div className="pt-5">
      <div className="text-text-grey font-bold text-sm mb-5">LATEST SEARCHES</div>
      {foundCities.map((i) => (   
        <div
          onClick={() => onClickHandler(i.name, i.country)}
          key={i.id}
          className={`flex align-center p-4 mb-2 rounded-md border-2 cursor-pointer hover:bg-bg-color hover:border-2 hover:border-sky-500 duration-300 ${
            i.country &&
            foundCityForecastLocation?.lon === i.lon
              ? "bg-bg-color border-sky-500"
              : "bg-light-grey "
          }`}
        >

          <div className="relative w-full">
            {i.name ? (
              <>
                <div className="text-2xl font-bold">{i.name}</div>
                <div className="text-base text-text-grey font-medium">{i.country}</div>
              </>
            ) : (
              <div className="text-base text-text-grey font-medium">No data available</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoundCities;
