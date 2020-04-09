import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
        TblogList :[],
    };



    async componentDidMount() {
      this.fetchNews();
      //setInterval(this.apiCall, 5000); // runs every 5 seconds.
    }
  
    fetchNews = async() =>{
      var url = `https://livesupdates.com/stats/v1/covid/trending?page=1&limit=4`
      fetch(url)
          .then((response) => response.json())
          .then(indiaList => {
              this.setState({ TblogList:indiaList["resp"]["docs"]});
          });
  }

    render() {
        
        return <section class="my-5">
          <Carousel
          keepDirectionWhenDragging
          infinite
          dots>
            {this.state.TblogList.map((item, i) => (
              
              <div class="row">
                <div class="col-lg-5 col-xl-5">
                  <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                    <img class="img-fluid" src={item.urlToImage} alt="Sample image"/>
                    <a>
                      <div class="mask rgba-white-slight"></div>
                      </a>
                      </div>
                  </div>
              <div class="col-lg-7 col-xl-7">
                <h3 class="font-weight-bold mb-3 custom-font-crausal"><strong><a class="text-decoration-anchor">{item.title}</a></strong></h3>
                <p>{item.description}</p>
                  <p>by <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
                  <Link to ={`/blog/${item.newsUrl}`}>Read more</Link>
                </div>
          </div>
            ))}     
</Carousel>
          
        
          <hr class="my-5"/>
        </section>
       
    }
  }






