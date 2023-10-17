import { useState } from "react"

export const TruckDetails=()=>{

    const[random,setRandom]=useState(0);

    const incrementTruck=()=>{
        setRandom(random+1);
    }

    return(
        <>
            <div>Unloading details</div>
            <div>No. of truck passed={random}</div>
            <button onClick={incrementTruck}>truck+</button>
        </>
        

    )
}