import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { fetchSeachID, fetchTicketPart } from '../ticketSlice'
import Ticket from '../ticket/Ticket'
import Loader from '../../loader/Loader'
import FooterMoreBtn from '../../footerMoreBtn/FooterMoreBtn'
import { filteringTickets } from '../../filtersComponents/filterFunctions/filteringTickets'
import { sortingTickets } from '../../filtersComponents/filterFunctions/sortingTickets'

import classes from './TicketList.module.scss'

const TicketList = () => {
  const { numberOfTickets, ticketsLoadingStatus, searchId, nameTicketPart } = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchId === '') {
      dispatch(fetchSeachID())
    }
  }, [])

  useEffect(() => {
    if (searchId !== '' && ticketsLoadingStatus !== 'fetched') {
      dispatch(fetchTicketPart(searchId))
    }
  }, [nameTicketPart])

  const filteredTickets = useSelector((state) => {
    return sortingTickets(filteringTickets(state.tickets.tickets, state.filters.transfers), state.filters.activeSort)
  })
  if (ticketsLoadingStatus === 'error') {
    return <h5 className={classes['text-error']}>Ошибка загрузки!</h5>
  } else if (ticketsLoadingStatus === 'fetching') {
    return <Loader />
  }
  if (filteredTickets.length === 0) {
    return <h3 className={classes['text-info']}>Рейсов, подходящих под заданные фильтры, не найдено!</h3>
  }
  return (
    <div>
      <div className={classes.tickets}>
        {filteredTickets.slice(0, numberOfTickets).map((item) => {
          return <Ticket {...item} key={uuidv4()} />
        })}
      </div>
      <FooterMoreBtn />
    </div>
  )
}

export default TicketList
