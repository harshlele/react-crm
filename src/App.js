import './App.scss';
import React, {useState} from "react";
import Cols from "./DefaultCols";
import Data from "./DefaultData";
import Tab from "./Table/Table"
import "../node_modules/bulma/css/bulma.css";


function App() {
  const [currTab,setTab] = useState(0);
  const [conData,setConData] = useState(Data.contacts);
  const [dealData,setDealData] = useState(Data.deals);
  const [conCols,setConCols] = useState(Cols.ContactCols);
  const [dealCols,setDealCols] = useState(Cols.DealCols);

  const onDataUpdate = (type,changes) => {
    let data = currTab == 0 ? conData : dealData;
    let cols = currTab == 0 ? conCols : dealCols;
    
    if(type == "update"){
      changes.forEach(([row,col,oldVal,newVal]) => {
        if(oldVal != newVal){
          console.log("in if");
          
          if(row >= data.length) data[row] = {};
          
          data[row][col] = newVal;
        }
      });
    }
    else if(type == "removeRow"){
      changes.forEach(row => {
        data.splice(row,1);
      });
    }
    else if(type == "addRow"){
      let newRow = {}
      cols.forEach(col => {
        newRow[col.key] = "";
      });
      data.push(newRow);
    }
    
    if(currTab == 0){
      setConData(data);
    }
    else setDealData(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header my-3 mx-2">
          <div className="has-text-left-desktop is-size-3 is-size-1-desktop">React CRM</div>
          <div className="tabs">
            <ul>
              <li className={currTab == 0 ? 'is-active' : ''} onClick={() => setTab(0)}><a href="#">Contacts</a></li>
              <li className={currTab == 1 ? 'is-active' : ''} onClick={() => setTab(1)}><a href="#">Deals</a></li>
            </ul>
          </div>
        </div>
        <Tab datalist={currTab == 0 ? conData : dealData} cols={currTab == 0 ? conCols : dealCols} height={550} onDataChange={(type,changes) => {onDataUpdate(type,changes)}}></Tab>
      </div>
    </div>
  );
}

export default App;
