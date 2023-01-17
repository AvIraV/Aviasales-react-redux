import { Spin } from 'antd'

import classes from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spin size="large" />
    </div>
  )
}

export default Loader
