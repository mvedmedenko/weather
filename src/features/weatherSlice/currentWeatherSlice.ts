
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { CurrentLocationWeather, WeatherRequestParams, DataForecast, FoundCities } from '../../types/types';


type Weather = {
  currentLocationWeather: DataForecast;
  foundCityForecast: DataForecast,
  foundCities: FoundCities[]
  isLoading: boolean;
  isLoaded: boolean,
  error: string | null;
  inputValue: string
};

const initialState: Weather = {
  currentLocationWeather: {
    current: {
      cloud: 0,
      condition: {
        code: 1000,
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        text: "Sunny",
      },
      feelslike_c: 0,
      feelslike_f: 0,
      gust_kph: 0,
      gust_mph: 0,
      humidity: 0,
      is_day: 1,
      last_updated: '',
      last_updated_epoch: 0,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 0,
      pressure_mb: 0,
      temp_c: 0,
      temp_f: 0,
      uv: 0,
      vis_km: 0,
      vis_miles: 0,
      wind_degree: 0,
      wind_dir: '',
      wind_kph: 0,
      wind_mph: 0,
    },
    forecast: {
      forecastday: [],
    },
    location: {
      country: '',
      lat: 0,
      lon: 0,
      localtime: '',
      localtime_epoch: 0,
      name: '',
      region: '',
      tz_id: ''
    },
  },
  foundCities: [],
  foundCityForecast: {
    current: {
      cloud: 0,
      condition: {
        code: 1000,
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        text: "Sunny",
      },
      feelslike_c: 0,
      feelslike_f: 0,
      gust_kph: 0,
      gust_mph: 0,
      humidity: 0,
      is_day: 1,
      last_updated: '',
      last_updated_epoch: 0,
      precip_in: 0,
      precip_mm: 0,
      pressure_in: 0,
      pressure_mb: 0,
      temp_c: 0,
      temp_f: 0,
      uv: 0,
      vis_km: 0,
      vis_miles: 0,
      wind_degree: 0,
      wind_dir: '',
      wind_kph: 0,
      wind_mph: 0,
    },
    forecast: {
      forecastday: [],
    },
    location: {
      country: '',
      lat: 0,
      lon: 0,
      localtime: '',
      localtime_epoch: 0,
      name: '',
      region: '',
      tz_id: ''
    },
  },
  isLoading: false,
  isLoaded: false,
  error: null,
  inputValue: '',
};

export const getCurrentWeatherAsync = createAsyncThunk(
  'current/getCurrentWeather',
  async ({ city, country }: WeatherRequestParams): Promise<DataForecast>  => {
    try {
      const response = await api.getCurrentWeather(city, country);
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }
);

export const getFoundCitiesAsync = createAsyncThunk(
  'current/getFoundCities',
  async (value: string) => {
    try {
      const response = await api.getFoundCities(value);
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }
);


export const getFoundCityForecastAsync = createAsyncThunk(
  'current/getFoundCityForecast',
  async ({ city, country }: WeatherRequestParams): Promise<DataForecast> => {
    try {
      const response = await api.getFoundCityWeather(city, country);
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  }
);

const currentWeatherSlice = createSlice({
  name: 'current',
  initialState: initialState,
  reducers: {
    setInputValueToStore: (state, actions) => {
      state.inputValue = actions.payload;
    },
    clearFoundCityForecast: (state) => {
      state.foundCityForecast = initialState.foundCityForecast;
    },
    clearFoundCities: (state) => {
      state.foundCities = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeatherAsync.fulfilled, (state, action) => {
      state.currentLocationWeather = action.payload;
      state.isLoading = false;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(getCurrentWeatherAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCurrentWeatherAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to fetch current weather';
    });

    builder.addCase(getFoundCitiesAsync.fulfilled, (state, action) => {
      state.foundCities = action.payload;
      state.isLoading = false;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(getFoundCitiesAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFoundCitiesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to fetch searched countries';
    });


    builder.addCase(getFoundCityForecastAsync.fulfilled, (state, action) => {
      state.foundCityForecast = { ...action.payload };
      state.isLoading = false;
      state.isLoaded = true;
      state.error = null;
    });
    builder.addCase(getFoundCityForecastAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFoundCityForecastAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Failed to fetch searched countries';
    });
  },
});

export const { setInputValueToStore, clearFoundCityForecast, clearFoundCities } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
