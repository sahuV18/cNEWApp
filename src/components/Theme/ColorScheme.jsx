import React from 'react'

export const ColorScheme = (props) => {
    
    let themeC;
        if(props.theme){
            themeC='theme1'
        }
        else{
            themeC='theme2'
        }
    
    if(props.theme)
    return (
        <>
         <div className={themeC}>normal theme</div>
        </>
    )
    else
    return(
        <>
        <div className={themeC}>black theme</div>
        </>
    )
}
