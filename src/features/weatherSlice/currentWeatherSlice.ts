// currentWeatherSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

type Weather = {
  currentLocationWeather: any[];
  currentLocation: any[]
  forecast: any[]
  isLoading: boolean;
  isLoaded: boolean,
  error: string | null;
};

const initialState: Weather = {
  currentLocationWeather: [],
  currentLocation: [],
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
