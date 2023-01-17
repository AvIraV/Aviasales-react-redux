import { configureStore } from '@reduxjs/toolkit'

import filters from '../components/filtersComponents/filterSlice'
import tickets from '../components/ticketsComponents/ticketSlice'

const store = configureStore({
  reducer: { filters, tickets },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
