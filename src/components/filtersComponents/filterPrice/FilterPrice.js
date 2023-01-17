import { useDispatch, useSelector } from 'react-redux'

import { sortTickets } from '../filterSlice'

import classes from './FilterPrice.module.scss'

const FilterPrice = () => {
  const dispatch = useDispatch()
  const sorts = useSelector((state) => state.filters.sorts)

  return (
    <div className={classes['info-filter']}>
      <button
        name={'Самый дешевый'}
        className={sorts[0].active ? classes['info-filter__item'] + ' ' + classes.active : classes['info-filter__item']}
        onClick={(e) => dispatch(sortTickets(e.target['name']))}
      >
        Самый дешевый
      </button>
      <button
        name={'Самый быстрый'}
        className={sorts[1].active ? classes['info-filter__item'] + ' ' + classes.active : classes['info-filter__item']}
        onClick={(e) => dispatch(sortTickets(e.target['name']))}
      >
        Самый быстрый
      </button>
      <button
        name={'Оптимальный'}
        className={sorts[2].active ? classes['info-filter__item'] + ' ' + classes.active : classes['info-filter__item']}
        onClick={(e) => dispatch(sortTickets(e.target['name']))}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default FilterPrice
