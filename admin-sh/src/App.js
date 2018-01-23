import React, { Component } from 'react';

// import Main from './components/main';
import Sidepar from './components/sidepar';
// import Card from './components/card';
import Panel from './components/panel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>  
        {/* <div className="wrapper"> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Sidepar />                                            
            </div>
            <div className="col-sm-9">
              <Panel />                
            </div>     
          </div>
        </div>
        </div>
    );
  }
}

export default App;
