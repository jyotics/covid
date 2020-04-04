import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
import Moment from "react-moment";

export default  class Trending extends Component {

    constructor(props) {
        super(props);

        this.state = {trendingNews: [],activeItem:1,totalItems:0,buttonFlag:true};
    }

    componentDidMount() {
        this.fetchNews();
        //setInterval(this.fetchTweets, 560000); // runs every 5 seconds.
    }
    fetchNews = async() =>{
        var url = `https://livesupdates.com/stats/v1/covid/trending?page=1&limit=4`
        fetch(url)
            .then((response) => response.json())
            .then(indiaList => {
                this.setState({ trendingNews:indiaList["resp"]["docs"]});
            });
    }
    render() {
        return (
            <MDBRow>
                {this.state.trendingNews.map((item, i) => (
                <MDBCol lg="6" md="12">
                    <div style={{
                        borderBottom: "1px solid #e0e0e0",
                        marginBottom: "1.5rem"
                    }}>
                        <MDBRow>
                            <MDBCol md="4">
                                <MDBView hover rounded className="z-depth-1-half mb-4">
                                    <img
                                        className="img-fluid"
                                        src={item.urlToImage}
                                        alt=""
                                    />
                                    <a href={item.url} target="_blank">
                                        <MDBMask overlay="white-slight" className="waves-light"/>
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol md="8">
                                <p className="font-weight-bold dark-grey-text">
                                    <Moment format="dddd, MMMM Do YYYY">{item.publishedAt}</Moment>
                                </p>
                                <div className="d-flex justify-content-between">
                                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                        <a href={item.url} target="_blank" className="dark-grey-text">
                                            {item.title}
                                        </a>
                                    </MDBCol>
                                    <a href={item.url} target="_blank">
                                        <MDBIcon icon="angle-double-right"/>
                                    </a>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBCol>
                ))}
            </MDBRow>
        );
    }
}