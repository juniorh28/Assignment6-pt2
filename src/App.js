
import './App.css';
import React,{Component} from 'react'
import MatchCity from './Components/MatchCity'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      cityname: 'new york',
      result: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
     
    this.setState({
      cityname: e.target.value
    })
  }
  async componentDidMount() {
    let name= this.state.cityname
    const url = "http://ctp-zip-api.herokuapp.com/city/"+name.toUpperCase()
    axios.get(url)
      .then(res => {
        const response = res.data;
        this.setState({ 
            result : response,
        });
      }).catch(console.error())
}
  render(){
    
      return (
        <div className='App'>
        
          <h1> City name Search</h1>
          <label name="citymane"> City Name:</label>
          <input name="cityname" placeholder="New York" value={this.state.cityname} onChange={this.handleChange}/>
          <button  onClick={(e)=>{if(e.key === 'Enter') this.componentDidMount()}}>Search</button>
          {/* <MatchCity cityname={this.state.result}/> */}
    
        </div>
      );
  }

}

export default App;

