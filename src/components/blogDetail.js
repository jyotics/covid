import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";


  export default  class BlogDetail extends Component {



      constructor(props){
          super(props);

      }
      state = {
          contentData:""
      };

      async componentDidMount() {
          const urlAddress = window.location.href.split("/")[4];
          this.fetchNews(urlAddress)
      }

      fetchNews = async(urlAddress) =>{
          var url = `http://localhost:8000/v1/covid/trending/coronavirus-in-india-540-new-cases-17-deaths-in-24-hours-covid-19-tally-climbs-to-5734`
          fetch(url)
              .then((response) => response.json())
              .then(indiaList => {
                  this.setState({ contentData:indiaList["resp"]});
              });
      }

      createMarkup = function() {
          return {__html: this.state.contentData.content};
      }

    render() {

        return <section className="me">
            <h1>{this.state.contentData.title}</h1>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            <div className="text-center">
                <Link to='/'><MDBBtn color="primary">Read Latest News</MDBBtn></Link>
            </div>
        </section>
    }
  }






