import './App.scss';
import React, {useState} from "react";
import Cols from "./DefaultCols";
import Data from "./DefaultData";
import Tab from "./Table/Table"


function App() {
  const [currTab,setTab] = useState(0);

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
        <Tab datalist={currTab == 0 ? Data.contacts : Data.deals} cols={currTab == 0 ? Cols.ContactCols : Cols.DealCols} height={550}></Tab>
      </div>
    </div>
  );
}

export default App;
