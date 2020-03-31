import React, { Component } from 'react';



export default  class CovidCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return  <div className="col-md-6">
      <div className='card-counter'>
        <span className="count-numbers">{this.props.count}</span>
        <span className="count-name">{this.props.title}</span>
          <img src={this.props.img} style={{"width":"100px","height":"100px","align":"left"}} align="right"/>
      </div>
    </div>;
    }
  }






