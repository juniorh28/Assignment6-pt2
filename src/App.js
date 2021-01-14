import "./App.css";
import React, { Component } from "react";
import "./Components/MatchCity.css";
import MatchCity from "./Components/MatchCity";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MatchCity />
      </div>
    );
  }
}

export default App;
