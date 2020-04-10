
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer} from "mdbreact";
import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";
import Moment from "react-moment";


  export default  class BlogDetail extends Component {


      constructor(props) {
          super(props);

      }

      state = {
          contentData: ""
      };

      async componentDidMount() {
          const urlAddress = window.location.href.split("/")[4];
          this.fetchNews(urlAddress)
      }

      fetchNews = async (urlAddress) => {
          var url = CONFIG_URL+'/trending/' + urlAddress
          fetch(url)
              .then((response) => response.json())
              .then(indiaList => {
                  this.setState({contentData: indiaList["resp"]});
              });
      }

      createMarkup = function () {
          return {__html: this.state.contentData.content};
      }

      render() {
          return (
              <MDBCard
                  className="my-12 px-12 mx-auto"
                  style={{fontWeight: 300, maxWidth: "90%"}}
              >
                  <MDBCardBody style={{paddingTop: 0}}>
                      <h1 className="h1-responsive font-weight-bold my-5 text-center">
                          {this.state.contentData.title}
                      </h1>
                      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                          {this.state.contentData.description}
                      </p>
                      <MDBRow>
                          <MDBCol md="12" lg="12">
                              <div className="mb-4">
                                  <MDBView hover rounded className="z-depth-1-half mb-4">
                                      <img
                                          className="img-fluid"
                                          src={this.state.contentData.urlToImage}
                                          alt=""
                                      />
                                      <a href="#!">
                                          <MDBMask overlay="white-slight" className="waves-light"/>
                                      </a>
                                  </MDBView>
                                  <div className="d-flex justify-content-between">
                                      <a href="#!" className="deep-orange-text">
                                          <h6 className="font-weight-bold">
                                              <MDBIcon icon="utensils" className="pr-2"/>
                                              {/*{this.state.contentData.author}*/}
                                          </h6>
                                      </a>
                                      <p className="font-weight-bold dark-grey-text">
                                          <MDBIcon far icon="clock" className="pr-2"/>
                                          <Moment format="dddd, MMMM Do YYYY">{this.state.contentData.publishedAt}</Moment>
                                      </p>
                                  </div>
                                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                                      {/*<a href="#!">Title of the news</a>*/}
                                  </h3>
                                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                                      <div dangerouslySetInnerHTML={this.createMarkup()}/>
                                  </p>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBCardBody>
                  <div className="text-center">
                      <Link to='/'><MDBBtn color="primary">BACK</MDBBtn></Link>
                  </div>

              </MDBCard>
          );
      }
  }



// import React, { Component } from 'react';
// import axios from 'axios';
// import {CONFIG_URL} from '../config/config';
// import {Link} from "react-router-dom";
// import {MDBBtn} from "mdbreact";
//
//
//   export default  class BlogDetail extends Component {
//
//
//
//       constructor(props){
//           super(props);
//
//       }
//       state = {
//           contentData:""
//       };
//
//       async componentDidMount() {
//           const urlAddress = window.location.href.split("/")[4];
//           this.fetchNews(urlAddress)
//       }
//
//       fetchNews = async(urlAddress) =>{
//           var url = 'https://livesupdates.com/stats/v1/covid/trending/'+urlAddress
//           fetch(url)
//               .then((response) => response.json())
//               .then(indiaList => {
//                   this.setState({ contentData:indiaList["resp"]});
//               });
//       }
//
//       createMarkup = function() {
//           return {__html: this.state.contentData.content};
//       }
//
//     render() {
//
//         return <section className="me">
//             <h1>{this.state.contentData.title}</h1>
//             <div dangerouslySetInnerHTML={this.createMarkup()} />
//             <div className="text-center">
//                 <Link to='/'><MDBBtn color="primary">Read Latest News</MDBBtn></Link>
//             </div>
//         </section>
//     }
//   }
//
//
//
//
//
//
