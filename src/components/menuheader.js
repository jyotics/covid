import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

//moment.tz.setDefault("America/New_York");

import '../fonts/FiraSans-Regular.ttf';




export default  class MenuHeader extends Component {


  constructor(props) {
    super(props);
  }


  refreshPage = () => {
    window.location.reload(false);
  }
    render() {
      return <div><nav className="navbar navbar-light">
          <h2><i className="fa fa-bug" aria-hidden="true"></i> COVID-19</h2>

          <a className="navbar-brand" href="#"><i className="color_g">Last Updated At : </i><Moment format="dddd, MMMM Do YYYY hh:mm a" tz="Asia/Kolkata">{this.props.updated_since }</Moment></a>
          



    </nav><p className="pull-right" style={{"padding":"2px"}}>Auto Refreshed after 5 minutes</p></div>;

    }
  }






