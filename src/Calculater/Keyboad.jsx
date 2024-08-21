import React from 'react'
import style from './Keyboad.module.css'

function Keyboad({item ,keyvalue}) {
  return (
    <div className={style.div}> 
    {
      item.map((keynbr)=><button className={style.button}  onClick={()=>keyvalue( keynbr)}>{keynbr}</button>
    )
    }
      
    </div>
  )
}

export default Keyboad