import React, { Component } from 'react';
import Moment from 'react-moment';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn } from "mdbreact";

    import {
      BrowserRouter as Router,Switch,
      Route,
      Link,
    } from 'react-router-dom'




export default  class News extends Component {

  constructor(props) {
    super(props);

    this.state = {news: [],activeItem:1,totalItems:0};
  }

  componentDidMount() {
    this.fetchNews();
    //setInterval(this.fetchTweets, 560000); // runs every 5 seconds.
  }


  componentDidUpdate(prevProps, prevState) {
    if ((prevState.activeItem!= this.state.activeItem) && (parseInt(this.state.activeItem)>=1)) {
      console.log("updated");
      this.fetchNews();
    }
}

  fetchNews = async =>{
    var url = `https://livesupdates.com/stats/v1/covid/getnews?page=${this.state.activeItem }&limit=6`
    fetch(url)
    .then((response) => response.json())
    .then(indiaList => {
        this.setState({ totalItems: parseInt(indiaList["resp"]["totalPages"]) });
        this.setState({news:indiaList["resp"]["docs"]})
    });
  }

  toggleCollapse = (event) => {
    let counter = 0;
    console.log(event.target.classList[1])
    if (event.target.classList[1]=="fa-chevron-left"){
      console.log("LEFT")
        if(parseInt(this.state.activeItem)>1){
          console.log("inside left");
          counter = parseInt(this.state.activeItem) - parseInt(1)
          this.setState( { activeItem : counter } )
        } 
        console.log("inside outer left"+counter);
        
    }else{
      if (parseInt(this.state.activeItem)<parseInt(this.state.totalItems)){
        console.log("RIGHT")
        counter = parseInt(this.state.activeItem) + parseInt(1)
        this.setState( { activeItem : counter } )
      }
      
    }
      
    }
    render() {
      return   <MDBContainer>

<h3 style={{"textAlign": "left", "lineHeight": "1.4","padding" :"10px"}}><i className="fa fa-newspaper-o" aria-hidden="true"></i> Latest News</h3>



      <MDBCarousel activeItem={1} length={3}  showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
            <div className="row" pooo={this.state.activeItem}>
            {this.state.news.map((item, i) => (
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={item.urlToImage} />
                  <MDBCardBody>
                  <MDBCardTitle ><a href={item.url} target="_blank">{item.title}</a></MDBCardTitle>
                    <MDBCardText>
                    <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                    </MDBCardText>
                    {/* <MDBBtn color="primary" href={item.url} target="_blank">Read More</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <div className="row" pooo={this.state.activeItem}>
            {this.state.news.map((item, i) => (
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={item.urlToImage} />
                  <MDBCardBody>
                  <MDBCardTitle ><a href={item.url} target="_blank">{item.title}</a></MDBCardTitle>
                    <MDBCardText>
                    <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                    </MDBCardText>
                    {/* <MDBBtn color="primary" href={item.url} target="_blank">Read More</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
                <div className="row" pooo={this.state.activeItem}>
                {this.state.news.map((item, i) => (
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={item.urlToImage}/>
                  <MDBCardBody>
                  <MDBCardTitle ><a href={item.url} target="_blank">{item.title}</a></MDBCardTitle>
                    <MDBCardText>
                    <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                    </MDBCardText>
                    {/* <MDBBtn color="primary" href={item.url} target="_blank">Read More</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                ))}
              </div>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>

      {/* <div class="controls-top-button">
          <a data-test="carousel-control" class="btn-floating" data-slide="prev"><i data-test="fa" class="fa fa-chevron-left fa-lg" onClick={(e)=>this.toggleCollapse(e)}></i></a>
          <a data-test="carousel-control" class="btn-floating" data-slide="next"><i data-test="fa" class="fa fa-chevron-right fa-lg" onClick={(e)=>this.toggleCollapse(e)}></i></a>
        </div> */}
      
      <div class="text-center">
       <Link to='/news'><MDBBtn color="primary">Read Latest News</MDBBtn></Link>
       </div>

      
     

    </MDBContainer>
    }
  }






