 import Calculater from './Calculater/Calculater'
 import Display from './Calculater/Display'
 import styles from './App.module.css'
 import Keyboad from './Calculater/Keyboad'
import { useState } from 'react'
 
function App() {

  const keyboaditem=['/','*','-','+','9','8','7','C','6','5','4','-','3','2','1','=']

  const [itemkey,setitemkey]=useState("");


  const keyvalue=(textkey)=>{

 if(textkey==='C'){
  setitemkey("")
 }
 else if(textkey==='='){
  const newitem=eval(itemkey);
  setitemkey(newitem)
 }
 else{

  const newitem=itemkey+textkey;
  setitemkey(newitem)


 }

    

  }

 
  return (
    < div  className={styles.App}>  
        <Display textkeyitem={itemkey}></Display>
       <Keyboad item={keyboaditem} keyvalue={keyvalue}></Keyboad>
     </div >
  )
}

export default App
