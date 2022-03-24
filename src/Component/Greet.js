import React from 'react'
/*function Greet (){



return <h1>

   functional Component
</h1>



}*/
const Greet = (props) => {        // PROPS     // Arrow function  

                                          
    console.log(props)
    return <h1>Hello {props.name} {props.heroname} </h1>   

}

    
export default Greet                             