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
      return <div><nav className="navbar navbar-light" style={{"background-color": "#e3f2fd"}}>
        <img src={coronavirus} width="100" height="50" />
        
      <a className="navbar-brand" href="#">Coronavirus disease (COVID-19) <i className="color_g">Last Updated At : </i><Moment format="YYYY/MM/DD HH:mm:ss">{this.props.updated_since }</Moment></a>



    </nav></div>;

    }
  }






