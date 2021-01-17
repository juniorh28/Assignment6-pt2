import React, { Component } from 'react';

export default class ZipTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='zip-table'>
        <div className='grid'>
          {this.props.zipcodes.map((zipcode, i) => (
            <div
              onClick={this.props.click}
              className='zipcode-container'
              key={i}
            >
              {zipcode}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
