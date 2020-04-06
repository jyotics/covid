import React, { Component } from 'react';
import Moment from 'react-moment';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn ,MDBIcon} from "mdbreact";



export default  class NewsList extends Component {

  constructor(props) {
    super(props);

    this.state = {news: [],activeItem:1,totalItems:0,buttonFlag:true};
  }

  componentDidMount() {
    this.fetchNews([]);
    //setInterval(this.fetchTweets, 560000); // runs every 5 seconds.
  }


  async componentDidUpdate(prevProps, prevState) {
    if ((prevState.activeItem!= this.state.activeItem) && (parseInt(this.state.activeItem)>=1)) {
      console.log("updated");
      await this.fetchNews(prevState.news);
    }
}

  fetchNews = async(prevStateNews) =>{
    console.log("HERE",prevStateNews)
    var url = `https://livesupdates.com/stats/v1/covid/getnews?page=${this.state.activeItem }&limit=9`
    fetch(url)
    .then((response) => response.json())
    .then(indiaList => {
        this.setState({ totalItems: parseInt(indiaList["resp"]["totalPages"]) });
        this.setState({news:prevStateNews.concat(indiaList["resp"]["docs"])})
    });
  }

  toggleCollapse = (event) => {
    let counter = 0;
    console.log(event.target.classList[1])

      if (parseInt(this.state.activeItem)<parseInt(this.state.totalItems)){
        console.log("RIGHT")
        counter = parseInt(this.state.activeItem) + parseInt(1)
        this.setState( { activeItem : counter } )
      }else{
        this.setState({buttonFlag:false})
      }
    }
    render() {
      return   <MDBContainer>

<h3 style={{"textAlign": "left", "lineHeight": "1.4","padding" :"10px"}}><i className="fa fa-newspaper-o" aria-hidden="true"></i>Fast News</h3>



      <MDBCarousel activeItem={1} length={3}  showControls={true} showIndicators={true} multiItem >
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

      
{this.state.buttonFlag ? (
    <div class="text-center">
        <button type="button" class="btn btn-primary" onClick={(e)=>this.toggleCollapse(e)}>Load More</button>
    </div>
):''}
    </MDBContainer>
    }
  }






