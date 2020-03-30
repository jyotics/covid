import React from 'react';

import './App.css';
import IndiaCovid from './components/india-covid';
import CovidCount from './components/worldwide-covid';
import Tweets from './components/tweets';
import PMTweets from './components/PMtweets';
import MenuHeader from './components/menuheader';



window.onload = function(){
  var tableCont = document.querySelector('#table-cont')
  /**
   * scroll handle
   * @param {event} e -- scroll event
   */
  function scrollHandle (e){
    var scrollTop = this.scrollTop;
    this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
  }
  
  tableCont.addEventListener('scroll',scrollHandle)
}


function App() {
  return (
    
    <div className="App ">
      <MenuHeader/>

      <div className="row row-count container">
        <CovidCount title="Total" count="23"/>
        <CovidCount title="Active" count="23"/>
        <CovidCount title="Recovered" count="23"/>
        <CovidCount title="Death" count="0"/>
          <IndiaCovid/>

          <div className="row">
              <Tweets/>
              <PMTweets/>
          </div>
      </div>


    </div>
  );
}

export default App;
