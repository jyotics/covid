import React, { Component } from 'react';
import Moment from 'react-moment';
import {
    MDBCarousel, MDBCarouselInner, MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBCarouselItem
} from "mdbreact";



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
        var url = `https://livesupdates.com/stats/v1/covid/short/description?page=${this.state.activeItem }&limit=9`
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
        return <div className="news_descriptive" style={{display:this.state.news.length > 0? 'block' : 'none' }}>
        <h3 style={{"textAlign": "left", "lineHeight": "1.4","padding" :"10px"}}><i className="fa fa-eye" aria-hidden="true"></i> Short News</h3>

        <MDBRow>
            {this.state.news.map((item, i) => (
                <MDBCol md='4'>
                    <MDBCard narrow>
                        <MDBView cascade>
                            <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src={item.urlToImage}
                                alt='food'
                            />
                        </MDBView>
                        <h5 className='pink-text'>
                            <MDBIcon icon='utensils' /> {item.info}
                        </h5>
                        <MDBCardBody>

                            <MDBCardTitle className='font-weight-bold'>
                                {item.title}
                            </MDBCardTitle>

                            <MDBCardText>
                                {item.description}
                            </MDBCardText>
                            <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
            </MDBRow>
            {this.state.buttonFlag ? (
                <div class="text-center">
                    <button type="button" class="btn btn-primary" onClick={(e)=>this.toggleCollapse(e)}>Load More</button>
                </div>
            ):''}
        </div>
    }
}


