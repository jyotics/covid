import React, { Component } from 'react';



export default class IndiaCovid extends Component {

    constructor(props) {
        super(props);
    
        this.state = {india_data_api: []};
      }
    
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(indiaList => {
            this.setState({ india_data_api: indiaList });
        });

      }
    
    

    render() {
        const india_data = this.state.india_data_api.map((item, i) => (
            <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
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




