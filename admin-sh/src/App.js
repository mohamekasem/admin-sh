import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {Switch} from 'react-router-dom';

// all components
import Main from './components/main';
import Sidepar from './components/sidepar';
import Panel from './components/panel';
import ManagePanel from './components/managePanel';
import './App.css';

class App extends Component {
  render() {    
    return (
    <Router>
      <div>  
        {/* <div className="wrapper"> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Sidepar />                                            
            </div>
            <div className="col-sm-9">
            <Switch>
        		 <Route exact path= '/' component= {Main}/>
        		 <Route path= '/animelist' component= {Panel}/>
             <Route path={'/maneganime'} component={ManagePanel} />
             <Route render= {()=><p>Not Found</p>}/>
           </Switch>
            </div>     
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
