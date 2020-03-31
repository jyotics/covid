import React, { Component } from 'react';


export default  class CovidCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return  <div className="col-md-3">
      <div className={`card-counter ${ this.props.style }`}>
        <i className="fa fa-hospital-o"></i>
        <span className="count-numbers">{this.props.count}</span>
        <span className="count-name">{this.props.title}</span>
      </div>
    </div>;
    }
  }






