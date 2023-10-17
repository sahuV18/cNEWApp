import React, { useState } from 'react'
import { ColorScheme } from './ColorScheme'

export const Theme = () => {

    const[theme,setTheme]=useState(true)

    let text;
    if(theme){
      text='switch to black theme'
    }
    else{
      text='switch to normal theme'
    }


  return (
    <>
        <ColorScheme theme={theme}/>
        <button onClick={()=>setTheme(!theme)}>{text}</button>
    </>
  )
}
