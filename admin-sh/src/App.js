import React, { Component } from 'react';

// import Main from './components/main';
import Sidepar from './components/sidepar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="">
          <Sidepar />          
          {/* <Main /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
