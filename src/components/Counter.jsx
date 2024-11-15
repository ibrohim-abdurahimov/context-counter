import React from 'react'
import { useStateValue } from '../context'

const Counter = () => {
    const [state, dispatch] = useStateValue()
  return (
    <div className='count'>
        <button onClick={()=> dispatch({type: "INC", payload:1})}>INC</button>
        <button onClick={()=> dispatch({type: "DEC"})}>DEC</button>
    </div>
  )
}

export default Counter