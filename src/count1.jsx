import React from 'react'
import { useContext } from 'react'
import { sharadContext } from './context'

const Count1 = () => {
    const counter = useContext(sharadContext)
  return (
    <>
    hii 
    <br/>
    {counter}
    <br/>
    <button>click</button>

    </>
  )
}

export default Count1