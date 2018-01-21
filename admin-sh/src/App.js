import React, { Component } from 'react';

// import Main from './components/main';
import Sidepar from './components/sidepar';
import Card from './components/card';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>  
        <Sidepar />                      
        <div className="container">
          <div className="row">
          <Card />         
          {/* <Main /> */}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
