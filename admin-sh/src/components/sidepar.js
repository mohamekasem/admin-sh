import React, { Component } from 'react';

class SidePar extends Component {
  render() {
    return (
      <div className="">
      <div className="row">
      <div className="col-sm-3 col-lg-3">
      <div className="sideNav">
        <div className="logo">
        <a href="https://shadow-anime.herokuapp.com" target="_blank">
          <div className="logo_img"> 
            <img src= '/assets/img/logo.png'/>
          
          </div>
          <div id="logo_title">
            <h1>
            Admin <span>Shadow </span>
            </h1>
          </div>
          </a>
        </div>
        <ul id="menu" className="">
          <li className="list-group-costum">
            <a href="">
            <i class="fa fa-tachometer" aria-hidden="true"></i><p>Dashboard</p>
            </a>
          </li>
          <li className="list-group-costum">
            <a href="">
            <i class="fa fa-th-list" aria-hidden="true"></i><p>Anime List</p>
            </a>
          </li>
          <li className="list-group-costum">
            <a href="">
            <i class="fa fa-film" aria-hidden="true"></i><p>Movie</p>
            </a>
          </li>
          <li className="list-group-costum">
            <a href="">
            <i class="fa fa-users" aria-hidden="true"></i><p>Users</p>
            </a>
          </li>
          <li className="list-group-costum">
            <a href="">
            <i class="fa fa-television" aria-hidden="true"></i><p>Episods</p>
            </a>
          </li>
        </ul>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default SidePar;
