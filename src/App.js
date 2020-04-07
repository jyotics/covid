import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import NewsList from './components/news-list';
import MenuHeader from './components/menuheader';
import Footer from './components/footer';


import {
  BrowserRouter as Router,Switch,
  Route,
  Link
} from 'react-router-dom'


// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-000000-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {updated_since:''};
  }


  
  render() {
    
    return (
      <Router>
        <div className="container">
      <MenuHeader updated_since={this.state.updated_since}/>
      <Switch>
        <Route path="/news">
          <NewsList />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch> 


      </div>
          <Footer/>

      </Router>
      
     

      
    );
  }
}

export default App;
