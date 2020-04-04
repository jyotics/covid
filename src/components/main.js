import React, { Component } from 'react';
import '../App.css';
import IndiaCovid from '../components/india-covid';
import CovidCount from '../components/worldwide-covid';
import Tweets from '../components/tweets';
import PMTweets from '../components/PMtweets';
import Treanding from '../components/trending';
import ScrollToTop from 'react-scroll-up';

import img1 from '../images/1682046.svg';
import img2 from '../images/2585234.svg';
import img3 from '../images/2615192.svg';
import img4 from '../images/2750681.svg';
import News from '../components/news';
import NewsList from '../components/news-list';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {india_data_api: [],confirmedCase:0,activeCase:0,death:0,recovered:0,updated_since:''};
  }

  async componentDidMount() {
    this.apiCall();
    setInterval(this.apiCall, 5000); // runs every 5 seconds.
  }

  apiCall = async () =>{
      fetch('https://livesupdates.com/stats/v1/covid/getupdate')
      .then((response) => response.json())
      .then(async indiaList => {
        if(indiaList.resp.length >0){

            let sortedObj = indiaList["resp"][0]["data"].sort((a, b) => (parseInt(a.confirmedCase) > parseInt(b.confirmedCase)) ? -1 : 1)
          this.setState({india_data_api:sortedObj,updated_since:indiaList["resp"][0]['createdAt']})
        }
          await this.mapParameters()
      });
  }



  mapParameters = async()=> {
    let confirmedCase=0;
    let activeCase=0;
    let death=0;
    let recovered=0;
    this.state.india_data_api.map((item, i) => (
      confirmedCase = confirmedCase +parseInt(item.confirmedCase),
      activeCase = activeCase + parseInt(item.active),
      death =death + parseInt(item.death),
      recovered =recovered +parseInt(item.recovered)
    ));
    this.setState({confirmedCase:confirmedCase,activeCase:activeCase,death:death,recovered:recovered})
  }

  
  render() {
    
    return (
      <div style={{"marginTop":"123px"}}>
      <h2><i className="fa fa-line-chart" style={{"padding-bottom": "15px","padding-left":"14px"}} aria-hidden="true"></i> Trending</h2>
      <div className="row">
          <div className="col-md-10">
              <Treanding/>
          </div>
          <div className="col-md-2">
              <h2 className={"custom"}><i className="fa fa-bug" aria-hidden="true"></i> COVID-19 India</h2>
              <CovidCount title="TOTAL CASES" img={img1} count={this.state.confirmedCase} style="primary"/>
              <CovidCount title="ACTIVE CASES" img={img2} count={this.state.activeCase} style="info"/>
              <CovidCount title="RECOVERED CASES " img={img3} count={this.state.recovered} style="success"/>
              <CovidCount title="DEATH CASES" img={img4} count={this.state.death} style="danger"/>
          </div>
      </div>
         <div className="row">
          <IndiaCovid india_data_api={this.state.india_data_api}/>
      </div>

          <div className="row">
          <NewsList/>
          </div>
          <div className="row" style={{"marginTop":"50px"}}>
              <Tweets/>
              <PMTweets/>
          </div>
          <ScrollToTop showUnder={160}>
              <span id="button"></span>
          </ScrollToTop>
      </div>


     
          
    
       
      
     

      
    );
  }
}

export default App;
