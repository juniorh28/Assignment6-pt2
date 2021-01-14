import React, { Component } from "react";
import axios from "axios";

class MatchCity extends Component {
  constructor() {
    super();
    this.state = {
      cityname: null,
      zipcode: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let cityname = e.target.value;
    let cityInput = cityname.toUpperCase();

    const url = `http://ctp-zip-api.herokuapp.com/city/${cityInput}`;
    axios
      .get(url)
      .then((res) => {
        const response = res.data;
        let zipArr = [];
        for (const i in response) {
          zipArr.push(response[i]);
        }

        this.setState({
          zipcode: zipArr,
        });
      })
      .catch(console.error());
  }
  render() {
    return (
      <div className="App">
        <h1> City name Search</h1>
        <label name="citymane"> City Name:</label>
        {/* <input name="cityname" placeholder="New York" value={this.state.cityname} onChange={this.handleChange}/>
              <button  onClick={(e)=>{if(e.key === 'Enter') this.componentDidMount()}}>Search</button> */}
        {/* <MatchCity cityname={this.state.result}/> */}
        <input type="text" name="zipcode" onChange={this.handleChange}></input>
        <ul className="no-bullets">
          {this.state.zipcode.map((zipcode, i) => (
            <li key={i}>{zipcode}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MatchCity;
