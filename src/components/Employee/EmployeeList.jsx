import { Employee } from "./Employee";

function EmployeeList(){

    const sidingArea={
        sidingName:'umrer',
        area:'ngp'
    }

    const assoId=[1,2,3,4,5,6]

    const salary={
        rkv:'2',
        alv:'5',
        sahu:'7',
        katle:'51',
        abhi:'8',
        shetty:'55'
    }

    return(
        <>
            <Employee name='r k v' add='ngp' bg='a' desig='pricipal scientist' incharge={true} site={sidingArea} id={assoId} {...salary}/>
            <br />
            <hr />
            <Employee name='a l v' add='tamil' bg='b' desig='sc a' site={sidingArea}/>
            <br />
            <hr />
            <Employee name='sahu' add='orisa' bg='o' desig='sc b' incharge site={sidingArea}/>
            <br />
            <hr />
            <Employee name='katle' add='ngp' bg='a-' desig='ta' site={sidingArea}/>
            <br />
            <hr />
            <Employee name='abhi' add='dhanbad' bg='b+' desig='to' site={sidingArea}/>
            <br />
            <hr />
            <Employee name='shetty' add='oria' bg='0-' desig='office a' incharge={false} site={sidingArea}/>
        </>
    )
}

export default EmployeeList;