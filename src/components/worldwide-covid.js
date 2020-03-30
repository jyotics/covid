import React, { Component } from 'react';


export default  class CovidCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.count}</p>
          {/* <a href="#" className="btn btn-primary">View Data</a> */}
        </div>
      </div>
    </div>;
    }
  }






