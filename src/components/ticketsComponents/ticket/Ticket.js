import React from 'react'

import Utils from '../../../utils'

import classes from './Ticket.module.scss'

const Ticket = ({ carrier, price, segments }) => {
  const [depature, arrival] = segments

  return (
    <React.Fragment>
      <div className={classes.ticket}>
        <div className={classes['ticket__header']}>
          <p className={classes['ticket__price']}>{Utils.priceEditor(price)}</p>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
        </div>
        <div className={classes['ticket-info']}>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>
              {depature.origin} – {depature.destination}
            </p>
            <p>{Utils.destinationTime(depature.date, depature.duration)}</p>
          </div>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>В пути</p>
            <p>{Utils.durationTime(depature.duration)}</p>
          </div>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>{Utils.changeTransfersNumber(depature['stops'])}</p>
            <p>{depature.stops.join(', ')}</p>
          </div>
        </div>
        <div className={classes['ticket-info']}>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>
              {arrival.origin} – {arrival.destination}
            </p>
            <p>{Utils.destinationTime(arrival.date, arrival.duration)}</p>
          </div>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>В пути</p>
            <p>{Utils.durationTime(arrival.duration)}</p>
          </div>
          <div className={classes['ticket-info__item']}>
            <p className={classes['ticket-info__item__grey']}>{Utils.changeTransfersNumber(arrival['stops'])}</p>
            <p>{arrival.stops.join(', ')}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Ticket
