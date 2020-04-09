import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';


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
                  this.setState({ contentData:indiaList["resp"].content});
              });
      }

      createMarkup = function() {
          return {__html: this.state.contentData};
      }

    render() {

        return <section style={{"marginTop":"15rem !important"}}>

            <div dangerouslySetInnerHTML={this.createMarkup()} />;
        </section>
    }
  }






