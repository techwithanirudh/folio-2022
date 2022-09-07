// Types
import type { RootState } from 'store'

// Style
import style from './index.module.css'

// Utils
import cn from 'classnames'

// Components
import MenuTrigger from '../MenuTrigger'

// Hooks
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Menu() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 500)
  }, [])

  const classes = cn({
    [style.hidden]: !visible || location.pathname !== '/'
  })

  return (
    <div className={classes}>
      <p className={style.desc}>
        <span className={style.line}>v4.0</span>
      </p>
      <p className={style.desc}>
        <span className={style.line}>2003 - 2022</span>
      </p>
      <hr className={style.separator} />
      <MenuTrigger />
    </div>
  )
}

export default Menu
