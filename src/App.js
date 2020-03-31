import React, { Component } from 'react';
import './App.css';
import IndiaCovid from './components/india-covid';
import CovidCount from './components/worldwide-covid';
import Tweets from './components/tweets';
import PMTweets from './components/PMtweets';
import MenuHeader from './components/menuheader';
import Footer from './components/footer';


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
      fetch('http://localhost:8000/v1/covid/getupdate')
      .then((response) => response.json())
      .then(async indiaList => {
        if(indiaList.resp.length >0){
          this.setState({india_data_api:indiaList["resp"][0]["data"],updated_since:indiaList["resp"][0]['createdAt']})
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
      <div className="App ">
      <MenuHeader updated_since={this.state.updated_since}/>

      <div className="row row-count container">
        <CovidCount title="Total" count={this.state.confirmedCase} style="primary"/>
        <CovidCount title="Active" count={this.state.activeCase} style="info"/>
        <CovidCount title="Recovered" count={this.state.recovered} style="success"/>
        <CovidCount title="Death" count={this.state.death} style="danger"/>
          <IndiaCovid india_data_api={this.state.india_data_api}/>

          <div className="row" style={{"margin-top":"50px"}}>
              <Tweets/>
              <PMTweets/>
          </div>
      </div>

    <Footer/>
    </div>
    );
  }
}

export default App;
