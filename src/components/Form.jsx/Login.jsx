import React, { useRef } from 'react'

export const Login = () => {

    const IDRef=useRef();
    const PasswordRef=useRef();

    const print=(e)=>{
        e.preventDefault();
        console.log(IDRef.value,PasswordRef.value);
    }
  return (
    <>
        <div>Login</div>
        <form onSubmit={(e=>print(e))}>
            <label htmlFor="">
                ID:
                <input type='text' ref={IDRef}/>
            </label>
            <br />
            <label htmlFor="">
                Password:
                <input type="text" ref={PasswordRef}/>
            <br />
            <button>submit</button>
            </label>
        </form>
        {/* <section>
            <div>id:{IDRef}</div>
            <div>password:{PasswordRef}</div>
        </section> */}
    </>
    
  )
}
