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

          <p className="auto_r">Auto Refreshed after 5 minutes</p>
          



    </nav></div>;

    }
  }






