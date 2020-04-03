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
      return <div><nav className="navbar fixed-top navbar-light bg-light">
        

          {/* <span>Auto Refreshed after 5 minutes</span> */}
          



    </nav></div>;

    }
  }






