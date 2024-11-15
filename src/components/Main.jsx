import React from 'react'
import { useStateValue } from '../context'

const Main = () => {
    const [state, dispatch] = useStateValue()
  return (
    <h3>{state.count}</h3>
  )
}

export default Main