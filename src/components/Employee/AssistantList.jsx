import React, { useState } from 'react'
import { Assistant } from './Assistant'

export const AssistantList = () => {

    let assistantList=[
        {
            id:'1',
            NAME:'SAHU',
            ADD:'BPL',
            DOB:'22-09-1992',
            DOJ:'22-11-2017',
        },
        {
            id:'2',
            NAME:'ANUJ',
            ADD:'DINDORI',
            DOB:'25-04-98',
            DOJ:'25-4-19',
        },
        {
            id:'3',
            NAME:'MANISH',
            ADD:'NGP',
            DOB:'54-5-87',
            DOJ:'23-9-20',
        },
        {
            id:'4',
            NAME:'GAUTAM',
            ADD:'BPL',
            DOB:'1-6-36',
            DOJ:'4-7-21',
        }
    ]

    const[newList,setNewList]=useState(assistantList)

    function deleted(e){
        let updatedList=newList.filter((el)=>e.target.id!==el.id)
        setNewList(updatedList);
    }

    
  return (
    <>
        <h4>AssistantList</h4>
        <div>{newList.map((el)=>{
            return(
                <div className='assistant' key={el.id}>
                    <Assistant NAME={el.NAME} ADD={el.ADD} DOB={el.DOB} DOJ={el.DOJ}/>
                    <br />
                    <button onClick={(e)=>deleted(e)} id={el.id}>delete</button>
                </div>    
            )
        })}</div>

    </>
    
  )
}
