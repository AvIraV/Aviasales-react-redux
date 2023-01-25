import { Progress } from 'antd'
import { useSelector } from 'react-redux'

import classes from './Loader.module.scss'

const Loadbar = () => {
  const nameTicketPart = useSelector((state) => state.tickets.nameTicketPart)
  return <Progress strokeLinecap="butt" percent={nameTicketPart * 4} className={classes.loadbar} />
}

export default Loadbar
