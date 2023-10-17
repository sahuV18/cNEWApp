import { OtherEmployee } from "./OtherEmployee";

const CIL=()=>{

    let details={
        dob:"22/09/63",
        sign:"yes"
    }

    let detailsKKB={
        dob:"2/09/75",
        sign:"no"
    }

    const printName=(name1)=>{
        console.log(`${name1}`);
    }

    return(
        <>
            <div>cil authorizesd employees list</div>
            <OtherEmployee name="pandey" post="PA" add="sarni" bloodGroup="o+" salary={250000} other={details} autho printName={printName}/>

            <OtherEmployee name="kk bhuskute" post="TI" add="pkd" bloodGroup="a+" salary={200} other={detailsKKB} printName={printName}/>

        </>
        
    )
}
export default CIL;