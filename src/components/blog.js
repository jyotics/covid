import React, { Component } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import {
  BrowserRouter as Router,Switch,
  Route,
  Link
} from 'react-router-dom'



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



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
      var url = `https://livesupdates.com/stats/v1/covid/trending?page=1&limit=100`
      fetch(url)
          .then((response) => response.json())
          .then(indiaList => {
              this.setState({ TblogList:indiaList["resp"]["docs"]});
          });
  }

    render() {
        


        return <Carousel responsive={responsive}>

        {this.state.TblogList.map((item, i) => (

  <div class="card" style={{"width": "22rem","height": "35rem"}}>
  <img class="card-img-top" src={item.urlToImage}  alt="Card image cap"/>
  <div class="card-body">

  <div class="card-body-sub">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
  </div>
   {(`${item.newsUrl}`)!=undefined &&
                      <div class="text-center">
                      <Link to ={`/blog/${item.newsUrl}`} >
                          <button type="button" className="btn btn-primary">Read more</button></Link>
                  </div>
                  }
  </div>
</div>
   ))} 
</Carousel>
        
       
    }
  }






