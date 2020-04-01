import React, { Component } from 'react';


export default  class Tweets extends Component {

  constructor(props) {
    super(props);

    this.state = {tweets: []};
  }

  componentDidMount() {
    this.fetchTweets();
    //setInterval(this.fetchTweets, 5000); // runs every 5 seconds.
  }
  fetchTweets = async =>{
    fetch('http://localhost:8000/v1/covid/gettweets?page=1&limit=10')
    .then((response) => response.json())
    .then(indiaList => {
        //this.setState({ tweets: indiaList });
        this.setState({tweets:indiaList["resp"]["docs"]})
    });
  }

    render() {

      console.log(this.state.tweets);


      return <div className="col-sm-6" >
        
  

<div className="row mt-6">
    <div className="col-md-12 col-xs-12">
      <div className="panel">
        
        <div className="panel-body">
          
          <div className="clearfix"></div>
          <h3 style={{"textAlign": "left","lineHeight": "1.4"}}>Recent Tweets</h3>
          <hr className="margin-bottom-10"/>
            <div id="container1">
              <div id="container2">
          <ul className="list-group list-group-dividered list-group-full">
          {this.state.tweets.map((item, i) => (

            <li className="list-group-item" key={i}>
              <div className="media">
                <div className="media-left">
                  <a className="avatar avatar-online" href="javascript:void(0)">
                    <img src={`${ item.user.profilePic }`} alt="..."/>
                    <i></i>
                  </a>
                </div>
                <div className="media-body">
                  <small className="text-muted pull-right"><a href={`${item.tweetAddress }`} target="_blank"><i className="fa fa-twitter"></i></a></small>
                  <h4 className="media-heading">{item.user.name}</h4>
                  <p className="tweets_heading">@{item.user.screen_name}</p>
                  <div style={{"margin": "13px","text-align": "left"}}>{item.text}</div>
                </div>
              </div>
            </li>
            ))};
            
          </ul></div></div>
          {/* <span class="text-info">M</span> */}
        </div>
      </div>
    </div>
</div>

    </div>
    }
  }






