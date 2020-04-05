import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

//moment.tz.setDefault("America/New_York");

import '../fonts/FiraSans-Regular.ttf';
import LiveUpdates from '../images/site_logo.png';




export default  class MenuHeader extends Component {


  constructor(props) {
    super(props);
  }


    render() {
      return <div><nav className="navbar fixed-top navbar-light" style={{"background-color":"#F44336","color":"white","justify-content": "center"}}>
       <img src={LiveUpdates} style={{"width":"448px","height":"174px","marginTop":"-66px","marginBottom":"-66px"}}/>
      </nav>
    </div>;

    }
  }






