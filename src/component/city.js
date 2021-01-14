import axios from "axios";
import React, { Component } from "react";


class City extends Component{
    constructor(props){
        super(props);
        this.state ={
            zipCode: [],
            city: null
        }

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidUpdate(){
        axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.city.toUpperCase())
        .then((result) => {
            let zipResult = result.data;
            let tempZip = {
                zip : zipResult
            }

            this.setState({
                zipCode: tempZip
            })
        }).catch((error) =>
            console.error(error))
        }
    

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>enter city in capital letter</h1>
                <input type ="text"
                name="city"
                onChange= {(event)=>this.handleChange(event)}></input>
            </div>
        )
    }
    

    
    
}

export default City;
