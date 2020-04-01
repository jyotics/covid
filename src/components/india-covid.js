import React, { Component } from 'react';



export default class IndiaCovid extends Component {

    constructor(props) {
        super(props);
      }
    
    

    render() {
        const india_data = this.props.india_data_api.map((item, i) => (
        <tr>
            <td className="col-xs-2">{i +1}</td>
            <td className="col-xs-8">{item.stateName}</td>
            <td className="col-xs-2">{item.confirmedCase}</td>
            <td className="col-xs-2">{item.recovered}</td>
            <td className="col-xs-2">{item.death}</td>
            <td className="col-xs-2">{item.active}</td>
        </tr>


        ));


      return <div className="col-md-12">
          <div className="panel-heading">
              <h3 style={{"text-align": "left", "line-height": "1.4"}}><i className="fa fa-globe" aria-hidden="true"></i> State
                  Wise Data</h3>
          </div>
          <table className="table table-responsive-sm">
              <thead>
              <tr>
                  <th className="col-xs-2">#</th>
                  <th className="col-xs-2">State</th>
                  <th className="col-xs-2">Confirmed</th>
                  <th className="col-xs-2">Recoverd</th>
                  <th className="col-xs-2">Death</th>
                  <th className="col-xs-2">Active</th>

              </tr>
              </thead>
              <tbody>
              {india_data}
              </tbody>
          </table>
      </div>
    }

    
  }




