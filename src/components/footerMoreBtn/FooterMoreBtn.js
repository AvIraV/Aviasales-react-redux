import React from 'react'
import { useDispatch } from 'react-redux'

import { showMoreTickets } from '../../store/ticketSlice'

import classes from './FooterMoreBtn.module.scss'

const FooterMoreBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className={classes.footer}>
      <button className={classes['footer__btn']} onClick={() => dispatch(showMoreTickets())}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default FooterMoreBtn
