import React, { Component } from 'react';



export default class IndiaCovid extends Component {

    constructor(props) {
        super(props);
    
        this.state = {india_data_api: []};
      }
    
      componentDidMount() {
        fetch('http://localhost:8000/v1/covid/getupdate')
        .then((response) => response.json())
        .then(indiaList => {
            this.setState({india_data_api:indiaList["resp"][0]["data"]})
        });

      }
    
    

    render() {
        const india_data = this.state.india_data_api.map((item, i) => (
            <tr>
            <th>{i +1}</th>
            <td>{item.stateName}</td>
            <td>{item.confirmedCase}</td>
            <td>{item.recovered}</td>
            <td>{item.death}</td>
            <td>{item.active}</td>
            </tr>
        ));


      return <div className="col-sm-12 table-cont" id='table-cont'>
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




