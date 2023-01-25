import { createSlice } from '@reduxjs/toolkit'

import { fetchSeachID, fetchTicketPart } from '../services/services'
/* eslint-disable indent */
const initialState = {
  ticketsLoadingStatus: '',
  tickets: [],
  nameTicketPart: 0,
  numberOfTickets: 5,
  searchId: '',
  errorStatus: '',
}

const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.numberOfTickets += 5
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeachID.fulfilled, (state, action) => {
        state.nameTicketPart = state.nameTicketPart + 1
        state.ticketsLoadingStatus = 'fetching'
        state.searchId = action.payload.searchId
      })
      .addCase(fetchSeachID.rejected, (state, action) => {
        state.errorStatus = action.error
      })
      .addCase(fetchTicketPart.fulfilled, (state, action) => {
        state.errorStatus = ''
        if (!action.payload.stop) {
          state.nameTicketPart = state.nameTicketPart + 1
          state.ticketsLoadingStatus = 'stop spinner'
          state.tickets = [...state.tickets, ...action.payload.tickets]
        } else if (action.payload.stop) {
          state.ticketsLoadingStatus = 'fetched'
        }
      })
      .addCase(fetchTicketPart.rejected, (state, action) => {
        state.errorStatus = action.error
        if (action.error.name === 'SyntaxError') {
          state.nameTicketPart = state.nameTicketPart + 1
        } else {
          state.ticketsLoadingStatus = 'error'
        }
      })
      .addDefaultCase(() => {})
  },
})

const { actions, reducer } = ticketSlice
export default reducer
export const { showMoreTickets } = actions
