import React, { Component } from 'react';
import Moment from 'react-moment';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle,MDBCardText, MDBBtn } from "mdbreact";
import Cookies from 'js-cookie';



export default  class NewsList extends Component {

  constructor(props) {
    super(props);

    this.state = {news: [],activeItem:1,totalItems:0,buttonFlag:true,IconColor:"blue"};
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


    toggleEvent = (event) => {
      let emotions = 0;
      
      if(event.target.classList[1]=='fa-frown'){
          emotions=2;
      }else if(event.target.classList[1]=='fa-thumbs-down') {
          emotions=1;
      }else if (event.target.classList[1]=='fa-thumbs-up') {
          emotions=3;
      }

      const id = event.target.id;
      //console.log(id);

      let key_value=event.target.getAttribute("data-index");
      console.log(key_value);
      let newsCopy = JSON.parse(JSON.stringify(this.state.news))
      if(emotions==1){

        if(newsCopy[key_value].smile==1){
          newsCopy[key_value].smile=0
        }else{
          newsCopy[key_value].smile=1;
        }
         

        newsCopy[key_value].frown=0;
        newsCopy[key_value].meh=0; 
      }else if(emotions==2){

        if(newsCopy[key_value].frown==1){
          newsCopy[key_value].frown=0
        }else{
          newsCopy[key_value].frown=1;
        }
        //newsCopy[key_value].frown=1; 
        newsCopy[key_value].meh=0; 
        newsCopy[key_value].smile=0; 
      }else if(emotions==3){
        //newsCopy[key_value].meh=1; 
        if(newsCopy[key_value].meh==1){
          newsCopy[key_value].meh=0
        }else{
          newsCopy[key_value].meh=1;
          
        }
        newsCopy[key_value].smile=0; 
        newsCopy[key_value].frown=0;
        
      }
      
      this.setState({ news: newsCopy});


      // const requestOptions = {
      //   method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ emotions: emotions ,browser_id: Cookies.get('_ga')})
      // };
      // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      //   .then(response => localStorage.setItem('browser_id', Cookies.get('_ga')))
      //   .then(data => this.setState({ postId: data.id }));
       
      }

    render() {
      console.log(this.state.news);

      return   <MDBContainer style={{"marginTop":"123px"}}>

<h3 style={{"textAlign": "left", "lineHeight": "1.4","padding" :"10px"}}><i className="fa fa-newspaper-o" aria-hidden="true"></i> News</h3>



      <MDBCarousel activeItem={1} length={this.state.totalItems}  showControls={true} showIndicators={true} multiItem >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
            <div className="row" pooo={this.state.activeItem}>
            {this.state.news.map((item, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={item.urlToImage} />
                  <MDBCardBody>
                      <MDBCardTitle ><a href={item.url} target="_blank">{item.title}</a></MDBCardTitle>
                    <MDBCardText>
                    <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                    </MDBCardText>
                    {/* <MDBBtn color="primary" href={item.url} target="_blank">Read More</MDBBtn> */}
                    <div class="row">
                    <div class="col-4">
                       <i class="fas fa-thumbs-up mdb-gallery-view-icon fa-lg" data-index={i} style={{color: item.meh === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 20
                    </div>
                    <div class="col-4">
                    <i class="fas fa-thumbs-down mdb-gallery-view-icon fa-lg" data-index={i} style={{color: item.smile === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 30
                    </div>
                    <div class="col-4">
                    <i class="far fa-frown mdb-gallery-view-icon fa-lg" data-index={i} style={{color: item.frown === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 40
                    </div>
                  </div>
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
                    <div class="row">
                    <div class="col-4"> 
                       <i class="fas fa-thumbs-up mdb-gallery-view-icon fa-lg"  data-index={i}  id={item._id}  style={{color: item.meh === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 41
                    </div>
                    <div class="col-4">
                    <i class="fas fa-thumbs-down mdb-gallery-view-icon fa-lg " data-index={i}   id={item._id}  style={{color: item.smile === 1  ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 51
                    </div>
                    <div class="col-4">
                    <i class="far fa-frown mdb-gallery-view-icon fa-lg" data-index={i}   id={item._id}  style={{color: item.frown === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 61
                    </div>
                  </div>
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
                    <div class="row">
                    <div class="col-4">
                       <i class="fas fa-thumbs-up mdb-gallery-view-icon fa-lg" data-index={i}  id={item._id}  style={{color: item.meh ===1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 42
                    </div>
                    <div class="col-4">
                    <i class="fas fa-thumbs-down mdb-gallery-view-icon fa-lg" data-index={i}  id={item._id}  style={{color: item.smile === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 52
                    </div>
                    <div class="col-4">
                    <i class="fas fa-frown mdb-gallery-view-icon fa-lg" data-index={i}  id={item._id}  style={{color: item.frown === 1 ? "red" : ""}} id={item._id} onClick={(e)=>this.toggleEvent(e)}></i> 62
                    </div>
                  </div>
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






