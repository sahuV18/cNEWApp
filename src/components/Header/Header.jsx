import { Button } from "../Button";
import { SearchBar } from "./SearchBar";
import './Header.css'
import { Login } from "./Login";

export default function Header(){
    return(
        <>
            <div className="header">
            <h1>Coal Solution pvt. ltd.</h1>
            <div>
                <SearchBar/>
                <Button/>
            </div>
            <Login/>
            </div>
            
        </>
    )
}