import React from 'react'
import { Rectification } from './Rectification'

export const RectifiedDetails = () => {

    const print=(witnessForm)=>{
        console.log(`newSiding ${witnessForm.SIDING}`);
    }

  return (
    <>
        <h3>RectifiedDetails</h3>
        <Rectification print={print}/>
    </>
    
  )
}
