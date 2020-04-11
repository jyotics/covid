import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";

export default class Table extends React.Component {


   constructor(props) {
        super(props);
      }

  render() {
    //const columns = ["State", "Confirmed", "Recoverd", "Death", "Active"];


    const columns = [
 {
  name: "stateName",
  label: "State Name",
  options: {
   filter: false,
   sort: true,
  }
 },
 {
  name: "confirmedCase",
  label: "Confirmed Cases",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "recovered",
  label: "Recovered Cases",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "death",
  label: "Death Cases",
  options: {
   filter: false,
   sort: false,
  }},
  {
  name: "active",
  label: "Active Cases",
  options: {
   filter: false,
   sort: false,
  }
 },
];

const data = this.props.india_data_api

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      rowsPerPage:5,
      selectableRows: false,
      print : false,
      download :false,
      filter:false
    };

    return (
      <MUIDataTable 
        title={"COVID-19 India"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}
