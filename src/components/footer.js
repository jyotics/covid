import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default  class Footer extends Component {
    render() {
      return <footer className="page-footer font-small cyan darken-3">
                  <div class="row">
                      <div class="col-md-12 py-5">
                          <div class="mb-5 flex-center">

                              <a class="">
                                  <i class="fab fa-lg white-text mr-md-5 mr-3 fa-2x">Livesupdates</i>
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






