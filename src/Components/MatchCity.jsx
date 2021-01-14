import React, {Component} from 'react'



class MatchCity extends Component{
    constructor(props){
        super(props)

        this.state ={
            result : this.props.result
        }

    }


    render(){
        let i=0
        return(
            <div>
                                 {
                 this.state.result.map((item) =>{
                     
                   return (
                    <diV >
                      
                      <p>Zipcode {i++}: {item}</p>

                      <br/>
                      <br/>
                    </diV>

                   );

                   })    

                 }
            </div>

        );
    }
}


export default MatchCity