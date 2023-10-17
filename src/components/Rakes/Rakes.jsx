import React, { useState } from 'react'

export const Rakes = () => {

    const[rakes,increaseRakes]=useState(0);

    const increment=()=> {
        increaseRakes(rakes+1)
    }

    const decrement=()=> {
        increaseRakes(rakes-1)
    }

    const[status,setStatus]=useState('incomplete')

  return (
    <>
        <div>Rakes</div>
        <div>No. of Rakes: {rakes}</div>
        <button onClick={increment}>Rake+1</button>
        <button onClick={decrement}>Rake-1</button>
        <br />
        <div>SAMPLING STATUS:{status}</div>
        <button onClick={()=>setStatus('completed')}>sampling status</button>
    </>
    
  )
}
