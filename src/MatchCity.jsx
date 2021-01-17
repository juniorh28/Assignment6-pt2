import React, { Component } from 'react';
import axios from 'axios';
import ZipTable from './ZipTable';

export default class MatchCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      zipcodes: [],
    };
    this.handleCopy = this.handleCopy.bind(this);
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
          zipcodes: zipArr,
        });
      })
      .catch(console.error());
  }

  handleCopy(e) {
    if (e.target.className === 'zipcode-container') {
      const zip = e.target;

      // Ignore click if you already copied text
      if (zip.innerText === 'COPIED!') return;

      // Select the text, copy it, then deselect it
      window.getSelection().selectAllChildren(zip);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();

      // show copy success
      const originalText = zip.innerText;
      const originalBG = zip.style.backgroundColor;
      const originalColor = zip.style.color;
      zip.innerText = 'COPIED!';
      zip.style.backgroundColor = 'white';
      zip.style.color = 'black';
      setTimeout(() => {
        zip.innerText = originalText;
        zip.style.backgroundColor = originalBG;
        zip.style.color = originalColor;
      }, 1000);
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Search Zip Code By City</h1>
          <label name='cityname'> City Name:</label>
          <input
            type='text'
            name='zipcode'
            onChange={this.handleChange}
          ></input>
        </div>
        <ZipTable click={this.handleCopy} zipcodes={this.state.zipcodes} />
      </div>
    );
  }
}
