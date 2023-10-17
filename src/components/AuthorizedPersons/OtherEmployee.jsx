export const OtherEmployee=(props)=>{
    let name1="ss"
    return(
        <>
            <h3>EMPLOYEES DETAILS</h3>
            <div>name:{props.name}</div>
            <div>post:{props.post}</div>
            <div>add:{props.add}</div>
            <div>blood group:{props.bloodGroup}</div>
            {/* <div>salary:{props.salary}</div>
            <div>other:{props.other.dob}</div>
            <div>sign:{props.other.sign}</div>
            <div>Authorised:{props.autho?"yes":"no"}</div>
            <button onClick={()=>props.printName(name1)}>click</button> */}
            <br />
        </>
    )
}