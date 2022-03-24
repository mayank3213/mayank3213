import React, { Component } from 'react'

class Message extends Component {            //State in class Component

    constructor(){                // create Object to render the element on button click 
            super()
            this.state={
                Message:'Welcome Visitor'      //JSX
            }
    }
    changeMessage(){

        this.setState({                  // aceept the new state of the object 

            Message:'Thankyou for Subscribing gandu'
        })
    }           
                render(){
                    return(     // bind the state value in to the render function 

                        <div>              
                        <h1>{this.state.Message}</h1>      
                        <button onClick={( )=> this.changeMessage() }>Subscribe</button>   

                      </div>

                    )
                }
                


}


export default Message
