import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import NewsList from './components/news-list';
import MenuHeader from './components/menuheader';
import Footer from './components/footer';
import Blog from './components/blog';
import createHistory from 'history/createBrowserHistory';
import {withRouter} from 'react-router';

import BlogDetail from './components/blogDetail';



import {
  BrowserRouter as Router,Switch,
  Route,
  Link
} from 'react-router-dom'


import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {updated_since:''};
  }


    getData(data){
        console.log(data);
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

        <Route exact path="/blog/:blogId" component={withRouter(BlogDetail)} />
          

        <Route exact path="/blog">
          <Blog />
        </Route>

        

        <Route path="/">
          <Main />
        </Route>
       

        {/* <Route path="blog/:productId"
            render={ (props) => <Product data= {productsData} {...props} />}/> */}

      </Switch> 


      </div>
          <Footer/>

      </Router>
      
     

      
    );
  }
}

export default App;
