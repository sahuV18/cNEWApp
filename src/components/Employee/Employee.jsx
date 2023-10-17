    export function Employee(props){
        
    return(
        <>
            <div>NAME: {props.name}</div>
            <div>ADDRESS: {props.add}</div>
            <div>BLOOD GROUP: {props.bg}</div>
            <div>DESIGNATION: {props.desig}</div>
            <div>SIDING INCHARGE: {props.incharge?'yes':'no'}</div>
            <div>SIDING:{props.site.area}</div>
            <div>LOCATION:{props.site.sidingName}</div>
            <div>ID:{props.id}</div>
            <div>SALARY:{props.rkv}</div>
        </>
    )
}
//for object u have to pass in all props