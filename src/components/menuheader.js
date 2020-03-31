import React, { Component } from 'react';
import coronavirus from '../images/coronavirus.png';
import Moment from 'react-moment';

import '../fonts/FiraSans-Regular.ttf';




export default  class MenuHeader extends Component {


  constructor(props) {
    super(props);
  }


  refreshPage = () => {
    window.location.reload(false);
  }
    render() {
      return <div><nav className="navbar navbar-light" style={{"background-color": ""}}>
          <h2><i className="fa fa-bug" aria-hidden="true"></i> COVID-19</h2>

          <a className="navbar-brand" href="#"><i className="color_g">Last Updated At : </i><Moment format="dddd, MMMM Do YYYY hh:mm a">{this.props.updated_since }</Moment></a>



    </nav></div>;

    }
  }






