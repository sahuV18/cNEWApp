import React, { useState } from 'react'

export const LoadingWitnessForm = () => {

    let LoadingWitnessForm={
        sidingName:'',
        rakeNo:'',
        dos:'',
        grade:'',
        RepName:''
    }

    const[details,setDetails]=useState({
        sidingName:'',
        rakeNo:'',
        dos:'',
        grade:'',
        RepName:''
    })

    const[show,setShow]=useState(false);

    const handler=(e)=>{
        if(e.target.id==='sidingName'){
            LoadingWitnessForm.sidingName=e.target.value
        }
        else if(e.target.id==='rakeNo'){
            LoadingWitnessForm.rakeNo=e.target.value
        }
        else if(e.target.id==='dos'){
            LoadingWitnessForm.dos=e.target.value
        }
        else if(e.target.id==='grade'){
            LoadingWitnessForm.grade=e.target.value
        }
        else if(e.target.id==='RepName'){
            LoadingWitnessForm.RepName=e.target.value
        }   
    }

    const print=(e)=>{
        e.preventDefault(e);
        setDetails(LoadingWitnessForm)
        if(LoadingWitnessForm.sidingName!==''&&LoadingWitnessForm.rakeNo!==''&&LoadingWitnessForm.dos!==''&&LoadingWitnessForm.grade!==''&&LoadingWitnessForm.RepName!==''){
            setShow(true);
        }


    }
  return (
    <>
        <div>LoadingWitnessForm</div>
        <form onSubmit={(e)=>print(e)}>
            <label htmlFor="sidingName">siding name:</label>
            <input id='sidingName' type='text' onChange={(e)=>handler(e)}/>
            <br />
            <label htmlFor="rakeNo">Rake No.:</label>
            <input id='rakeNo' onChange={(e)=>handler(e)}/>
            <br />
            <label htmlFor="dos">Date of sampling</label>
            <input id='dos' onChange={(e)=>handler(e)}/>
            <br />
            <label htmlFor="grade">Grade</label>
            <input id='grade' onChange={(e)=>handler(e)}/>
            <br />
            <label htmlFor="RepName">Representative name</label>
            <input id='RepName' onChange={(e)=>handler(e)}/>
            <br />
            <input type="submit"/>
            <br />
            {show && <section>
                <h4>show details</h4>
                <div>sidingName:{details.sidingName}</div>
                <div>rakeNo:{details.rakeNo}</div>
                <div>dos:{details.dos}</div>
                <div>grade:{details.grade}</div>
                <div>Repname:{details.RepName}</div>
            </section>}
        </form>
    </>
    
  )
}
