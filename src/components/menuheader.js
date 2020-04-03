import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

//moment.tz.setDefault("America/New_York");

import '../fonts/FiraSans-Regular.ttf';




export default  class MenuHeader extends Component {


  constructor(props) {
    super(props);
  }


    render() {
      return <div><nav className="navbar fixed-top navbar-light" style={{"background-color":"rgb(255, 160, 122)","color":"white","justify-content": "center"}}>
       <h2><a href="/"><i className="fa fa-newspaper" aria-hidden="true"></i> Latest Updates</a></h2>
      </nav>
    </div>;

    }
  }






