import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default  class Footer extends Component {
    render() {
      return <footer className="page-footer font-small" style={{"background-color":"#F44336","color":"white"}}>
                  <div class="row">
                      <div class="col-md-12 py-5">
                          <div class="mb-5 flex-center">

                              <a className="fb-ic">
                                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                              </a>
                              <a className="tw-ic">
                                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                              </a>
                              <a className="gplus-ic">
                                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                              </a>
                              <a className="li-ic">
                                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                              </a>
                              <a className="ins-ic">
                                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                              </a>
                              <a className="pin-ic">
                                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                              </a>
                          </div>
                      </div>


                  </div>

              <div class="footer-copyright text-center py-3">© 2020 Copyright:
                  <a href="https://livesupdates.com/"> livesupdates.com</a>
              </div>
   </footer>
      
    }
  }






