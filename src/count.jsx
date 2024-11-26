import React from 'react'
import { useState } from 'react';


const Count = () => {
    const [counter,setCounter]=useState(0);

    const increase=()=>{
        setCounter(counter+1);

    }
    
  return (
    <>
    {counter}
    <br/>
    <button onClick={increase}>click</button>


    </>
  )
}

export default Count;