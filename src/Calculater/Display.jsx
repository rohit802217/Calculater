import React from 'react'
import style from './Display.module.css'

function Display({textkeyitem}) {
  return (
    <div className={style.displaydiv} > 
 
    <input type="text" className={style.display} value= {textkeyitem }
       placeholder='cal' readOnly />

      
    
    </div>
  )
}

export default Display