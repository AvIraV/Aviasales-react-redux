import React from 'react'

import logo from '../../assets/logo.svg'
import FilterTransfer from '../filtersComponents/filterTransfer/FilterTransfer'
import FilterPrice from '../filtersComponents/filterPrice/FilterPrice'
import TicketList from '../ticketsComponents/ticketList/TicketList'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.app}>
      <div className={classes['app-wrapper']}>
        <div className={classes.header}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <FilterTransfer />
        <FilterPrice />
        <TicketList />
      </div>
    </div>
  )
}

export default App
