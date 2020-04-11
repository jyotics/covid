
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBContainer} from "mdbreact";
import React, { Component } from 'react';
import axios from 'axios';
import {CONFIG_URL} from '../config/config';
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";
import Moment from "react-moment";
import CommentBlog from '../components/commentBlog';
import {Redirect ,useHistory} from 'react-router-dom'



  export default  class BlogDetail extends Component {


      constructor(props) {
          super(props);

      }


      state = {
        TtblogList :[],
        contentData: ""
    };

   
  

  clickHandler = () => {
  if (this.props.match.params.blogId !== 0 && this.props.match.params.blogId !== '') {
    return (
      <Redirect 
        to={`/blog/${this.props.match.params.blogId}`}
      />
    );
  }
}
    
     

      componentDidMount() {
          //const urlAddress = this.props.location.pathname.split("/")[2];

          const urlAddress = this.props.match.params.blogId;
          console.log(urlAddress);
          this.fetchNews(urlAddress)

          this.fetchNewsList();
      }

      fetchNews = async (urlAddress) => {
          var url = CONFIG_URL+'/trending/' + urlAddress
          fetch(url)
              .then((response) => response.json())
              .then(indiaList => {
                  this.setState({contentData: indiaList["resp"]});
              });
      }

      fetchNewsList = async() =>{
      var url = `https://livesupdates.com/stats/v1/covid/trending?page=1&limit=6`
      fetch(url)
          .then((response) => response.json())
          .then(indiaList => {
              this.setState({ TtblogList:indiaList["resp"]["docs"]});
          });
  }



      createMarkup = function () {
          return {__html: this.state.contentData.content};
      }

      render() {
          return (

             <div class="row" style={{"marginTop":"70px"}}>
    <div class="col-md-8">
     
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


    </div>
    <div class="col-md-4">
      

    {this.state.TtblogList.map((item, i) => (

  <div class="card" style={{"width": "22rem","height": "auto","marginTop":"5px"}}>
  <img class="card-img-top" src={item.urlToImage}  alt="Card image cap"/>
  <div class="card-body">

  <div class="card-body-sub-u">
    <h5 class="card-title">{item.title}</h5>
  </div>
   {(`${item.newsUrl}`)!=undefined &&
                      <div class="text-center">
                      <a onClick={() =>this.clickHandler }>
                          <button type="button" className="btn btn-primary">Read more</button></a>
                  </div>
                  }
  </div>
</div>
   ))} 
  
    </div>
    <hr/>
    <CommentBlog blog_id={this.state.contentData._id}/> 

  </div>
          );
      }
  }


