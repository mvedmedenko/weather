import { configureStore } from '@reduxjs/toolkit'
import currentWeatherSlice from '../features/weatherSlice/currentWeatherSlice'

export const store = configureStore({
  reducer: {
    currentWeahter: currentWeatherSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// window.store = store;