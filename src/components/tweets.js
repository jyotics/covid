import React, { Component } from 'react';


export default  class Tweets extends Component {

  constructor(props) {
    super(props);

    this.state = {tweets: []};
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(indiaList => {
        this.setState({ tweets: indiaList });
    });

  }

    render() {




      return <div className="col-sm-6">
        
  

<div class="row">
    <div class="col-md-12 col-xs-12">
      <div class="panel">
        
        <div class="panel-body">
          
          <div class="clearfix"></div>
          <hr class="margin-bottom-10"/>
          <ul class="list-group list-group-dividered list-group-full">
          {this.state.tweets.map((item, i) => (

            <li class="list-group-item">
              <div class="media">
                <div class="media-left">
                  <a class="avatar avatar-online" href="javascript:void(0)">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
                    <i></i>
                  </a>
                </div>
                <div class="media-body">
                  <small class="text-muted pull-right">Just now</small>
                  <h4 class="media-heading">@Ramon Dunn</h4>
                  <div>Lorem ipsum Veniam aliquip culpa laboris minim tempor labore
                    commodo officia veniam non in in in.</div>
                </div>
              </div>
            </li>
            ))};
            
          </ul>
          <span class="text-info">163K users active</span>
        </div>
      </div>
    </div>
</div>

    </div>
    }
  }






