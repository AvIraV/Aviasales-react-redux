import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transfers: [
    { label: 'all', active: true, text: 'Все' },
    { label: '0', active: true, text: 'Без пересадок' },
    { label: '1', active: true, text: '1 пересадка' },
    { label: '2', active: true, text: '2 пересадки' },
    { label: '3', active: true, text: '3 пересадки' },
  ],
  activeSort: 'Самый дешевый',
  sorts: [
    { name: 'Самый дешевый', active: true },
    { name: 'Самый быстрый', active: false },
    { name: 'Оптимальный', active: false },
  ],
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sortTickets: (state, action) => {
      state.activeSort = action.payload
      state.sorts = state.sorts.map((item) =>
        item.name === action.payload ? { ...item, active: true } : { ...item, active: false }
      )
    },
    toggleChangeAllTransfers: (state) => {
      state.transfers = state.transfers.map((item) => ({ ...item, active: !state.transfers[0].active }))
    },
    toggleTargetTransferFilter: (state, action) => {
      state.transfers.map((item) => (item.active = item.label === action.payload ? !item.active : item.active))
    },
  },
})

const { actions, reducer } = filterSlice
export default reducer
export const { sortTickets, toggleChangeAllTransfers, toggleTargetTransferFilter } = actions
