import React, { Component } from 'react';
import Moment from 'react-moment';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn } from "mdbreact";

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
    var url = `https://livesupdates.com/stats/v1/covid/getnews?page=${this.state.activeItem }&limit=4`
    fetch(url)
    .then((response) => response.json())
    .then(indiaList => {
        this.setState({ totalItems: indiaList["resp"]["docs"]["totalPages"] });
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
      console.log("RIGHT")
      counter = parseInt(this.state.activeItem) + parseInt(1)
      this.setState( { activeItem : counter } )
    }
      
    }
    render() {
      return  <MDBContainer>
        
        <h3 style={{"text-align": "left", "line-height": "1.4","padding" :"10px"}}><i className="fa fa-newspaper-o" aria-hidden="true"></i> Latest News</h3>
      
      
        <div class="controls-top-button">
          <a data-test="carousel-control" class="btn-floating" data-slide="prev"><i data-test="fa" class="fa fa-chevron-left fa-lg" onClick={(e)=>this.toggleCollapse(e)}></i></a>
          <a data-test="carousel-control" class="btn-floating" data-slide="next"><i data-test="fa" class="fa fa-chevron-right fa-lg" onClick={(e)=>this.toggleCollapse(e)}></i></a>
        </div><MDBCarousel activeItem={1} length={this.state.totalItems} showControls={true} showIndicators={true}  multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1" >
              <div className="row" pooo={this.state.activeItem}>

              {this.state.news.map((item, i) => (
              <MDBCol md="3">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={item.urlToImage} />
                  <MDBCardBody>
                    <MDBCardTitle numberOfLines={2} >{item.title}</MDBCardTitle>
                     <MDBCardText>
                    <Moment format="DD/MM/YYYY">{item.publishedAt}</Moment>
                    </MDBCardText>
                    <div class="read_more_link">
                    <a href="">
                    <mdb-badge default="true">Read More</mdb-badge>
                  </a>

                  
                  </div>


                  
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              ))}
              
              
              </div>
              
             
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <div className="row">

          {this.state.news.map((item, i) => (
             <MDBCol md="3">
             <MDBCard className="mb-2">
               <MDBCardImage className="img-fluid" src={item.urlToImage} />
               <MDBCardBody>
                 <MDBCardTitle>{item.title}</MDBCardTitle>
                 <MDBCardText>
                 <Moment format="DD/MM/YYYY">{item.publishedAt}</Moment>
                 </MDBCardText>
                 
                

                 <a href="">
  <mdb-badge default="true">Read More</mdb-badge>
</a>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
              ))}
              

              </div>
              
             
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <div className="row">
            {this.state.news.map((item, i) => (
             <MDBCol md="3">
             <MDBCard className="mb-2">
               <MDBCardImage className="img-fluid" src={item.urlToImage} />
               <MDBCardBody>
                 <MDBCardTitle>{item.title}</MDBCardTitle>
                 <MDBCardText>
                 <Moment format="DD/MM/YYYY">{item.publishedAt}</Moment>
                 </MDBCardText>
                <a href="">
  <mdb-badge default="true">Read More</mdb-badge>
</a>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
              ))}
              </div>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    }
  }






