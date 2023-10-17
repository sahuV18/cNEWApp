import { useState } from "react"
import { OtherEmployee } from "./OtherEmployee"

export const MPPGCL=()=>{

    let MPPGCLList=[
        {
            id:'1',
            name:'SAHU',
            add:'BPL',
            bloodGroup:'22-09-1992',
            post:'22-11-2017',
        },
        {
            id:'2',
            name:'ANUJ',
            add:'DINDORI',
            bloodGroup:'25-04-98',
            post:'25-4-19',
        },
        {
            id:'3',
            name:'MANISH',
            add:'NGP',
            bloodGroup:'54-5-87',
            post:'23-9-20',
        },
        {
            id:'4',
            name:'GAUTAM',
            add:'BPL',
            bloodGroup:'1-6-36',
            post:'4-7-21',
        }
    ]

    const[list,setList]=useState(MPPGCLList)

    const deletee=(e)=>{
        let updatedlist=list.filter((el)=>e.target.id!==el.id)
        setList(updatedlist)


    }

    return(
        <>
            <div>mppgcl authorizesd employees list</div>
            {list.map((el)=>{
                return(
                    <div key={el.id}>
                    <OtherEmployee name={el.name} add={el.add} post={el.post} bloodGroup={el.bloodGroup}/>

                    <button id={el.id} onClick={(e)=>deletee(e)}>delete</button>
                    </div>
                )
                
        })}
        </>
        

    )
}