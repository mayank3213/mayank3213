import React, { Component } from 'react'

class Counter extends Component {

    constructor(){                // create Object to render the element on button click 
        super()
        this.state={
            count :0
                  
        }
}
     increment(){


        this.setState({

            count:this.state.count+1
        })
        console.log(this.setState.count)
     }
    render(){

        return( 
            <div> count-{this.state.count}  
           <button onClick={() => this.increment()}>increment</button >
           </div>  
                
            
                
                
        )
    }


    


}
export default Counter