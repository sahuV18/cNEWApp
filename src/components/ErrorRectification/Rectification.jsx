import React, { useState } from 'react'

export const Rectification = (props) => {
    const[witnessForm,setWitnessForm]=useState({
        SIDING:'ntpc-k',
        DOC:'22-5-23',
        DOP:'23-5-23',
        BAGS:'3',
        QUANTITY:'250 KG'
    })

  return (
    <>
        <h3>Rectification form</h3>
        <div>SIDING:{witnessForm.SIDING}</div>
        <button onClick={()=>setWitnessForm({...witnessForm,SIDING:'ntpc-g'})}>change</button>
        <div>DOC:{witnessForm.DOC}</div>
        <button onClick={()=>setWitnessForm({...witnessForm,DOC:'22-6-98'})}>change</button>
        <div>DOP:{witnessForm.DOP}</div>
        <button onClick={()=>setWitnessForm({...witnessForm,DOP:'28-6-99'})}>change</button>
        <div>BAGS:{witnessForm.BAGS}</div>
        <button onClick={()=>setWitnessForm({...witnessForm,BAGS:'6'})}>change</button>
        <div>Quantity:{witnessForm.QUANTITY}</div>
        <button onClick={()=>setWitnessForm({...witnessForm,QUANTITY:'300 kg'})}>change</button>
        <br />
        <br />
        {/* <button onClick={()=>props.printNewDetails(witnessForm)}>new details</button> */}
        <button onClick={()=>props.print(witnessForm)}>print details</button>
    </>
    
  )
}
