import React, { useState, useEffect } from "react";
import  DateWidget from './Widgets/DateWidget';

// SERVICES
import service from './services/service';
import TableWidget from "./Widgets/TableWidget";

function App() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        width: 150,
      },
      {
        label: 'City',
        field: 'city',
        width: 170,
      },
      {
        label: 'Start Date',
        field: 'start_date',
        width: 200,
      },
      {
        label: 'End Date',
        field: 'end_date',
        width: 100,
      },
      {
        label: 'Price',
        field: 'price',
        width: 150,
      },
      {
        label: 'Status',
        field: 'status',
        width: 100,
      },
      {
        label: 'Color',
        field: 'color',
        width: 100,
      },
    ],
    rows: [{
      name: 'Michael Bruce',
      position: 'Javascript Developer'
    }]
  });

  const getData = async (startDate, endDate) => {
    console.log("start date :" + startDate);
    console.log("end date :" + endDate);
    let res = await service.getAll(startDate, endDate);
    console.log(res);
    if(res) {
      let obj = {};
      obj["columns"] = datatable.columns;
      obj["rows"] = res;
      setDatatable(obj);
    }
  }

  const renderData = data => {
    return (
      <li key={data.id} className="list__item data">
        <h3 className="city_id">{data.id}</h3>
        <p className="city_name">{data.city}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <div >
        <DateWidget name = "Start Date " setDate = {setStartDate}/>
        <DateWidget name = "End Date " setDate = {setEndDate}/>
        <div className="form-group">
            <button className="btn btn-success" onClick = {() => getData(startDate, endDate)}>Get Data</button>
      </div> 
      </div>      
      <TableWidget datatable = {datatable}/>          
    </div>
  );
}

export default App;