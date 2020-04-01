import React, { Component } from 'react';



export default class IndiaCovid extends Component {

    constructor(props) {
        super(props);
      }
    
    

    render() {
        const india_data = this.props.india_data_api.map((item, i) => (
            <tr>
            <td>{i +1}</td>
            <td>{item.stateName}</td>
            <td>{item.confirmedCase}</td>
            <td>{item.recovered}</td>
            <td>{item.death}</td>
            <td>{item.active}</td>
            </tr>
        ));


      return <div className="col-sm-12 table-cont" id='table-cont'>
          <h3 style={{"textAlign": "left","lineHeight": "1.4"}}><i className="fa fa-globe" aria-hidden="true"></i> State Wise Data</h3>
      <table className="table table-striped" >
        <thead>
            <tr>
            <th scope="col">S No</th>
            <th scope="col">State Name</th>
            <th scope="col">Confirmed Cases</th>
            <th scope="col">Recovered</th>
            <th scope="col">Death</th>
            <th scope="col">Active Cases</th>
            </tr>
        </thead>
        <tbody>
            {india_data}
          </tbody>
        </table>
    </div>;
    }

    
  }




