import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class SidePar extends Component {
  render() {
    return (        
        <div className="col-sm-3 col-custom">        
        <div className="sideNav">
          <div className="logo">
          <a href="https://shadow-anime.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <div className="logo_img"> 
              <img src= '/assets/img/logo.png' alt="logo-img"/>
            </div>
            <div id="logo_title">
              <h1>
              Admin <span>Shadow </span>
              </h1>
            </div>
            </a>
          </div>
          <ul id="menu" className="">
            <li className="list-group-costum ">
              <NavLink exact activeClassName='active' to='/'>              
              {/* <a href=""> */}
              <i className="fa fa-tachometer" aria-hidden="true"></i><p>Dashboard</p>                    
              {/* </a> */}
              </NavLink>      
            </li>
            <li className="list-group-costum active">
              {/* <a href=""> */} 
              <NavLink activeClassName='active' to='/animelist'>          
                <i className="fa fa-th-list" aria-hidden="true"></i><p>Anime List</p>
              </NavLink>
              {/* </a> */}
            </li>
            <li className="list-group-costum">
              <a href="">
              <i className="fa fa-film" aria-hidden="true"></i><p>Movie</p>
              </a>
            </li>
            <li className="list-group-costum">
              <a href="">
              <i className="fa fa-users" aria-hidden="true"></i><p>Users</p>
              </a>
            </li>
            <li className="list-group-costum">
              <a href="">
              <i className="fa fa-television" aria-hidden="true"></i><p>Episods</p>
              </a>
            </li>
            <li className="list-group-costum">
              <a href="">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i><p>Admin Options</p>
              </a>
            </li>
          </ul>
        </div>
        {/* <span style={{"fontSize":"30px"}} >&#9776;</span> */}
      </div>
    );
  }
}

export default SidePar;
