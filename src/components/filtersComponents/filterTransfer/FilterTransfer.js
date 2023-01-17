import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { toggleTargetTransferFilter, toggleChangeAllTransfers } from '../filterSlice'

import classes from './FilterTransfer.module.scss'

const FilterTransfer = () => {
  const transfers = useSelector((state) => state.filters.transfers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!transfers[0].active) {
      if (transfers.slice(1).filter((item) => !item.active).length === 0) {
        dispatch(toggleTargetTransferFilter('all'))
      }
    }
  }, [transfers])

  const handleCheckerTransfer = (name) => {
    if (name === 'all') {
      dispatch(toggleChangeAllTransfers())
    } else if (transfers[0].active) {
      dispatch(toggleTargetTransferFilter('all'))
      dispatch(toggleTargetTransferFilter(name))
    } else {
      dispatch(toggleTargetTransferFilter(name))
    }
  }

  return (
    <div className={classes.sidebar}>
      <h2>Количество пересадок</h2>
      <ul>
        {transfers.map((item) => {
          return (
            <li key={uuidv4()}>
              <form>
                <label>
                  <input
                    type="checkbox"
                    checked={item.active}
                    className={classes.toggle + ' ' + classes['visually-hidden']}
                    onChange={() => handleCheckerTransfer(item.label)}
                  />
                  <span className={classes.tick}></span>
                  {item.text}
                </label>
              </form>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FilterTransfer
