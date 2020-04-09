import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';

import {
  BrowserRouter as Router,Switch,
  Route,
  Link
} from 'react-router-dom'

  export default  class Blog extends Component {

    
    constructor(props){
        super(props);
    }

    state = {
        isLoading: false,
        TblogList :[]
    };



    async componentDidMount() {
      this.fetchNews();
      //setInterval(this.apiCall, 5000); // runs every 5 seconds.
    }
  
    fetchNews = async() =>{
      var url = `https://livesupdates.com/stats/v1/covid/trending?page=1&limit=2`
      fetch(url)
          .then((response) => response.json())
          .then(indiaList => {
              this.setState({ TblogList:indiaList["resp"]["docs"]});
          });
  }

    render() {
        
        return <section class="my-5">

          <div class="row">

            
            
          


            <div class="col-lg-5 col-xl-5">
        
        <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
  
      </div>
            <div class="col-lg-7 col-xl-7">
              <h3 class="font-weight-bold mb-3"><strong>Title of the new article</strong></h3><p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
          quo minus id quod maxime.</p>
        {/* <p>by <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p> */}
        <Link to ="blog/sadsad"><a class="btn btn-primary btn-md">Read more</a></Link>
  
      </div>


         


         


           
        
          </div>
        
          <hr class="my-5"/>
        </section>
       
    }
  }






