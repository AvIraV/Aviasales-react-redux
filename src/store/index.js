import { configureStore } from '@reduxjs/toolkit'

import filters from './filterSlice'
import tickets from './ticketSlice'

const store = configureStore({
  reducer: { filters, tickets },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
