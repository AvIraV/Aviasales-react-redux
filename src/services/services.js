import { createAsyncThunk } from '@reduxjs/toolkit'

const baseURL = 'https://aviasales-test-api.kata.academy/'

export const fetchSeachID = createAsyncThunk('tickets/fetchSeachID', async () => {
  return await fetch(`${baseURL}search`).then((res) => res.json())
})

export const fetchTicketPart = createAsyncThunk('tickets/fetchTicketPart', async (searchId) => {
  return await fetch(`${baseURL}tickets?searchId=${searchId}`).then((res) => res.json())
})
