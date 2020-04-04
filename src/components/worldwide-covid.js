import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import ToastHeader from 'react-bootstrap/ToastHeader'


export default  class CovidCount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return(
          <Toast>
              <Toast.Header closeButton={false}>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">{this.props.count}</strong>
                  <small>{this.props.title}</small>
              </Toast.Header>
              {/*<Toast.Body>Hello, world! This is a toast message.</Toast.Body>*/}
          </Toast>
    );


    //
    //     <div className="col-md-2 col-md offset-1">
    //   <div className='card-counter'>
    //     <span className="count-numbers">{this.props.count}</span>
    //     <span className="count-name">{this.props.title}</span>
    //       <img src={this.props.img} style={{"width":"100px","height":"100px","align":"left"}} align="right"/>
    //   </div>
    // </div>;
    }
  }






