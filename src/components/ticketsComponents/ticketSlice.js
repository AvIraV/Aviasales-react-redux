import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
/* eslint-disable indent */
const initialState = {
  ticketsLoadingStatus: '',
  tickets: [],
  nameTicketPart: 0,
  numberOfTickets: 5,
  searchId: '',
  errorStatus: '',
}

export const fetchSeachID = createAsyncThunk('tickets/fetchSeachID', async () => {
  return await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
})

export const fetchTicketPart = createAsyncThunk('tickets/fetchTicketPart', async (searchId) => {
  return await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`).then((res) => res.json())
})

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
