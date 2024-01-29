// currentWeatherSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { CurrentLocation, CurrentLocationWeather } from '../../types/types';

type Weather = {
  currentLocationWeather: CurrentLocationWeather;
  currentLocation: CurrentLocation
  forecast: any[]
  isLoading: boolean;
  isLoaded: boolean,
  error: string | null;
};

const initialState: Weather = {
  currentLocationWeather: {
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

  currentLocation: {
    country: '',
    lat: 0,
    lon: 0,
    localtime: '',
    localtime_epoch: 0,
    name: '',
    region: '',
    tz_id: ''
  },

  forecast: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const getCurrentWeatherAsync = createAsyncThunk(
  'current/getCurrentWeather',
  async (city: string) => {
    try {
      const response = await api.getCurrentWeather(city);
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
    setCurrentLocationWeather: (state, actions) => {
      state.currentLocationWeather = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeatherAsync.fulfilled, (state, action) => {
      state.currentLocationWeather = action.payload.current;
      state.currentLocation = action.payload.location;
      state.forecast = [...action.payload.forecast.forecastday];
      state.isLoading = false;
      state.isLoaded = true,
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
  },
});

export const { setCurrentLocationWeather } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
